#!/bin/bash
set -e
cd /Users/matador/startups/legacybridge
git add .
git commit -m "${1:-update legacybridge}" || true
git push
