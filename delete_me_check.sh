#!/bin/bash

# List of directories to check
directories=(
  "src"
)

# Temporary file to store filenames with the unwanted string
temp_file=$(mktemp)

# This function checks for the unwanted line in a single file
check_file() {
  filename="$1"
  if grep -q "// ANCHOR - DELETE ME" "$filename"; then
    echo "$filename" >>"$temp_file"
  fi
}

# Function to check if a file is a text file
is_text_file() {
  file_type=$(file -b --mime-type "$1")
  if [[ $file_type == text/* ]]; then
    return 0 # Text file
  else
    return 1 # Not a text file
  fi
}

# Loop through the directories array and check each directory
for dir in "${directories[@]}"; do
  if [ -d "$dir" ]; then
    # Find all files in the directory and its subdirectories
    find "$dir" -type f -print0 | while IFS= read -r -d '' file; do
      if is_text_file "$file"; then
        check_file "$file"
      fi
    done
  else
    echo "Warning: Directory '$dir' not found."
  fi
done

# Display the list of files with the unwanted string
if [ -s "$temp_file" ]; then
  echo "Files with '// ANCHOR - DELETE ME' string:"
  cat "$temp_file"
  exit 1
else
  echo "No files with '// ANCHOR - DELETE ME' string found."
  exit 0
fi

# Clean up the temporary file
rm "$temp_file"
