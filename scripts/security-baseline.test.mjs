import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
test('static policy rejects inline scripts and loads project data before the application',()=>{
 assert.match(html,/http-equiv="Content-Security-Policy"/);assert.match(html,/script-src 'self';/);assert.doesNotMatch(html,/<script(?![^>]*\bsrc=)[^>]*>/i);assert.doesNotMatch(html,/\bon(?:click|load|error)\s*=/i);
 assert.ok(html.indexOf('src="project-data.js"')<html.indexOf('src="script.js"'));assert.match(html,/name="referrer" content="no-referrer"/);
});
test('externalized project records retain the portfolio data and render as text',()=>{
 const context={window:{}};vm.runInNewContext(fs.readFileSync(new URL('../project-data.js',import.meta.url),'utf8'),context);
 assert.ok(Array.isArray(context.window.PROJECT_DATA));assert.ok(context.window.PROJECT_DATA.length>=5);
 const script=fs.readFileSync(new URL('../script.js',import.meta.url),'utf8');assert.doesNotMatch(script,/\.innerHTML\s*=/);assert.match(script,/\.textContent\s*=\s*value/);
});
