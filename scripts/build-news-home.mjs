// Run after updating the manifest: node scripts/build-news-home.mjs
// Keep the homepage independent of full article bodies and archive downloads.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(root, 'beauty-news-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const context = vm.createContext({ window: {} });
const fields = ['id', 'category', 'tag', 'title', 'shortTitle', 'summary', 'date', 'image', 'alt'];
const selected = new Map();
for (const file of manifest.files) {
  if (!/^beauty-news-\d{4}-\d{2}-\d{2}\.js$/.test(file)) throw new Error('Invalid news filename');
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { timeout: 1000 });
  for (const batch of context.window.RAZMEHR_BEAUTY_NEWS.batches) {
    for (const story of batch.stories) {
      if (manifest.homeStoryIds.includes(story.id) && !selected.has(story.id)) selected.set(story.id, story);
    }
  }
  if (selected.size === manifest.homeStoryIds.length) break;
}
manifest.homeStories = manifest.homeStoryIds.map(id => {
  const story = selected.get(id);
  if (!story) throw new Error('Missing homepage story: ' + id);
  const card = Object.fromEntries(fields.map(key => [key, story[key]]).filter(([, value]) => value !== undefined));
  card.locales = Object.fromEntries(Object.entries(story.locales || {}).map(([language, translation]) =>
    [language, Object.fromEntries(fields.filter(key => key in translation).map(key => [key, translation[key]]))]));
  return card;
});
manifest.homeStoriesVersion = manifest.version;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log('Homepage summaries:', manifest.homeStories.length, '— no article bodies');
