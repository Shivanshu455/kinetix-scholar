import { IEEE_INDIA } from '../src/data/ieeeIndia.js';
import { CONFERENCES } from '../src/data/venuesConferences.js';
import { JOURNALS } from '../src/data/venuesJournals.js';
import { PREPRINTS } from '../src/data/venuesPreprints.js';
import { FIND_MORE, CHECKS, BEFORE_SUBMIT } from '../src/data/venuesMore.js';

const ieeeIndiaItems = IEEE_INDIA.map((c) => ({ name: c.name, url: c.officialUrl }));

const allItems = [
  ...ieeeIndiaItems,
  ...CONFERENCES,
  ...JOURNALS,
  ...PREPRINTS,
  ...FIND_MORE,
  ...CHECKS,
  ...BEFORE_SUBMIT,
  { name: 'UGC India', url: 'https://www.ugc.gov.in' }
];

const externalUrls = allItems
  .map((item) => ({ name: item.name, url: item.url }))
  .filter((item) => item.url && (item.url.startsWith('http://') || item.url.startsWith('https://')));

console.log(`Checking ${externalUrls.length} external URLs (10s timeout, browser User-Agent)...`);

async function checkUrl({ name, url }) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      redirect: 'follow',
      signal: AbortSignal.timeout(10000)
    });
    return { name, url, status: res.status, ok: res.ok };
  } catch (err) {
    return { name, url, status: err.name === 'TimeoutError' ? 'TIMEOUT' : err.message || 'ERROR', ok: false };
  }
}

const concurrency = 10;
const results = [];

for (let i = 0; i < externalUrls.length; i += concurrency) {
  const batch = externalUrls.slice(i, i + concurrency);
  const batchResults = await Promise.all(batch.map(checkUrl));
  results.push(...batchResults);
}

console.log('\n--- Link Check Results ---');
console.table(
  results.map((r) => ({
    Name: r.name,
    URL: r.url,
    Status: r.status,
    Result: r.ok ? 'OK' : 'FAIL'
  }))
);

const failures = results.filter((r) => !r.ok);
if (failures.length > 0) {
  console.log(`\nFound ${failures.length} failure(s):`);
  failures.forEach((f) => console.log(`- ${f.name} (${f.url}): ${f.status}`));
} else {
  console.log('\nAll external URLs responded successfully!');
}
