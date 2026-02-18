#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const BASE_HREF = '/CT053-3-1-FDD-Assignment/';

// Function to recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to add base href to HTML file
function addBaseHref(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if base tag already exists
    if (content.includes('<base')) {
      console.log(`✓ ${filePath} - already has base tag`);
      return;
    }

    // Add base tag after title tag
    const baseTag = `    <base href="${BASE_HREF}">\n`;
    const modified = content.replace(
      /(<title>.*?<\/title>)\n/,
      `$1\n${baseTag}`
    );

    if (modified !== content) {
      fs.writeFileSync(filePath, modified, 'utf8');
      console.log(`✓ ${filePath} - base href added`);
    } else {
      console.log(`✗ ${filePath} - could not add base href`);
    }
  } catch (error) {
    console.error(`✗ ${filePath} - Error: ${error.message}`);
  }
}

// Main execution
const rootDir = path.dirname(__filename);
const htmlFiles = findHtmlFiles(rootDir);

console.log(`\nAdding base href to ${htmlFiles.length} HTML files...\n`);

htmlFiles.forEach(addBaseHref);

console.log('\n✓ Done!');
