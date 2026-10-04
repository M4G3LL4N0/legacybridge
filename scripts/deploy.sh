#!/bin/bash
set -e
cd /Users/matador/startups/legacybridge
rm -rf .next
npm run build
git add .
git commit -m "${1:-update legacybridge}" || true
git push
vercel --prod
