import assert from 'node:assert/strict';
import test from 'node:test';
import { readdirSync, readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const homeData = JSON.parse(read('../src/content/site/home.json'));
const settings = JSON.parse(read('../src/content/site/settings.json'));
const homePage = read('../src/pages/index.astro');
const styles = read('../src/styles/global.css');
const projectSlugs = readdirSync(new URL('../src/content/projects/', import.meta.url)).map((file) => file.replace(/\.md$/, ''));

test('home hero opens with the GitHub handle and avatar', () => {
  assert.equal(settings.handle, 'EXIST-D');
  assert.match(settings.avatar, /^https:\/\/avatars\.githubusercontent\.com\//);
  assert.match(homePage, /siteConfig\.handle/);
  assert.match(homePage, /siteConfig\.avatar/);
  assert.equal(homeData.hero.description, '应用统计硕士在读，致力于将想法构建成可以使用的工具');
  assert.equal(settings.name, 'EXIST-D');
  assert.doesNotMatch(JSON.stringify(homeData), /王明旭/);
});

test('featured projects on the home page all exist', () => {
  assert.ok(homeData.featuredProjects.length > 0);
  for (const slug of homeData.featuredProjects) assert.ok(projectSlugs.includes(slug), `missing project: ${slug}`);
});

test('exposes the GitHub profile and keeps the technical stack content', () => {
  assert.match(homePage, /href: siteConfig\.github/);
  assert.ok(settings.techHighlights.some((item) => item.title === 'Agent 应用开发'));
  assert.ok(settings.techHighlights.some((item) => item.title === '向量检索和 RAG'));
});

test('supports light and dark themes', () => {
  assert.match(styles, /prefers-color-scheme: dark/);
  assert.match(styles, /:root\[data-theme='dark'\]/);
});

test('never uses the up-right arrow for external links', () => {
  assert.doesNotMatch(styles + homePage, /↗/);
});
