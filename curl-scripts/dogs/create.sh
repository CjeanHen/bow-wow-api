#!/bin/bash

API="http://localhost:4741"
URL_PATH="/dogs/"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "dog": {
      "name": "'"${NAME}"'",
      "breed": "'"${BREED}"'",
      "age": "'"${AGE}"'"
    }
  }'

echo
