#!/bin/bash

echo "post-build.sh – moving assets of frontend build to dev/ folder."

test ! -e $PWD/dev/ && mv $PWD/build/ $PWD/dev/ &&
mkdir $PWD/build/ &&
mv $PWD/dev/ $PWD/build/ &&
mv $PWD/build/dev/index.html $PWD/build