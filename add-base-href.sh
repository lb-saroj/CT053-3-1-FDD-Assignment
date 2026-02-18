#!/bin/bash

# Add base href to all HTML files in the project

BASE_HREF="/CT053-3-1-FDD-Assignment/"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo ""
echo "Adding base href to all HTML files..."
echo ""

# Find all HTML files and process them
find "$SCRIPT_DIR" -name "*.html" -type f | while read htmlfile; do
  # Check if base tag already exists
  if grep -q '<base' "$htmlfile"; then
    echo "✓ $htmlfile - already has base tag"
  else
    # Add base tag after title tag using sed (works on both macOS and Linux)
    sed -i.bak "/<\/title>/a\\
    <base href=\"$BASE_HREF\">
" "$htmlfile" && rm "${htmlfile}.bak"
    
    if [ $? -eq 0 ]; then
      echo "✓ $htmlfile - base href added"
    else
      echo "✗ $htmlfile - could not add base href"
    fi
  fi
done

echo ""
echo "✓ Done!"
