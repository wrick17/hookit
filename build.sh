git fetch --all
git merge origin/master
gulp run build
git add .
git commit -m "updated build files"
git push origin master
