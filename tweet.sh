#!/bin/bash
curl -o waifu $1
DESCRIPTION=$(node lib/index.js $1)
if [ $? -eq 0 ]; then
    t update "$DESCRIPTION" -f waifu
else
    echo failed
fi
rm waifu
