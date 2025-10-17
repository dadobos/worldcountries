#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create a fresh repo in dist and push to gh-pages
git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy' || true
git remote add origin git@github.com:dadobos/worldcountries.git
git push -f origin gh-pages

cd -