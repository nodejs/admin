#!/usr/bin/env node

// Validates the list in the markdown file passed as CLI argument are in the correct order.

import { open } from 'node:fs/promises';

const [,,markdownFile] = process.argv;

const readme = await open(markdownFile, 'r');

let currentList = null;
let previousGithubHandle;
let lineNumber = 0;

for await (const line of readme.readLines()) {
  lineNumber++;
  if (line.startsWith('##')) {
    currentList = line.slice(line.indexOf(' '));
    previousGithubHandle = null;
  } else if (currentList && (line.startsWith('- [') || line.startsWith('* ['))) {
    const currentGithubHandle = line.slice(3, line.indexOf(']')).toLowerCase();
    if (previousGithubHandle && previousGithubHandle >= currentGithubHandle) {
      throw new Error(`${currentGithubHandle} should be listed before ${previousGithubHandle} in the ${currentList} list (${markdownFile}:${lineNumber})`);
    }

    previousGithubHandle = currentGithubHandle;
  }
}

