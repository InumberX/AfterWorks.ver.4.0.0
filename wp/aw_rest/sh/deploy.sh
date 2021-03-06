#!/usr/local/bin/bash

CLIENT_ID="XXX"
CLIENT_SECRET="XXX"
CODE="XXX"
TOKEN="XXX"
AUTH_HDR="Authorization: bearer $TOKEN"
CONTENT=`cat /xxx/xxx/xxx/deploy.txt`
REPO="api.github.com/repos/xxx/xxx"

BLOB_SHA=`curl -H "$AUTH_HDR" -X POST \
         -d "{\"content\":\"$CONTENT\",\"encoding\":\"utf-8\"}" \
         https://$REPO/git/blobs | /xxx/xxx/xxx/local/rbenv/versions/2.6.3/bin/ruby -r 'json' -e 'puts JSON.parse(STDIN.read)["sha"]'`

BASE_TREE=`curl -H "$AUTH_HDR" https://$REPO/git/trees/master?recursive=1 | /xxx/xxx/xxx/local/rbenv/versions/2.6.3/bin/ruby -r 'json' -e 'puts JSON.parse(STDIN.read)["sha"]'`

TREE_SHA=`curl -H "$AUTH_HDR" -X POST \
         -d "{\"base_tree\": \"$BASE_TREE\",
         \"tree\":[
           {\"path\":\"deploy.txt\",\"mode\":\"100644\",\"type\":\"blob\",\"sha\":\"$BLOB_SHA\"}
          ]}" \
         https://$REPO/git/trees | /xxx/xxx/xxx/local/rbenv/versions/2.6.3/bin/ruby -r 'json' -e 'puts JSON.parse(STDIN.read)["sha"]'`

PARENT_SHA=`curl -H "$AUTH_HDR" https://$REPO/branches/master | /xxx/xxx/xxx/local/rbenv/versions/2.6.3/bin/ruby -r 'json' -e 'puts JSON.parse(STDIN.read)["commit"]["sha"]'`

COMMIT_SHA=`curl -H "$AUTH_HDR" -X POST \
           -d "{\"message\":\"deploy\", \"tree\":\"$TREE_SHA\", \"parents\":[\"$PARENT_SHA\"] }" \
           https://$REPO/git/commits | /xxx/xxx/xxx/local/rbenv/versions/2.6.3/bin/ruby -r 'json' -e 'puts JSON.parse(STDIN.read)["sha"]'`

curl -H "$AUTH_HDR" -X PATCH \
     -d "{\"force\":false, \"sha\":\"$COMMIT_SHA\"}" \
     https://$REPO/git/refs/heads/master