# tsapulding0222.github.io

## Deploy from feature-branch to master 
```
git subtree push --prefix dist origin gh-pages
```
or to force push
```
git push origin `git subtree split --prefix public master`:master --force
```