#!/usr/bin/env bash

# Install dependencies
sudo chown -R $USER /home/ubuntu/pcci
cd /home/ubuntu/pcci
npm i

# Not secure, temporary
# cp /home/ubuntu/.env /home/ubuntu/pcci
# cp /home/ubuntu/.env.staging /home/ubuntu/pcci
# cp /home/ubuntu/.env.production /home/ubuntu/pcci

FILE=/home/ubuntu/.env.development
if [ -f "$FILE" ]; then
  echo "$FILE exists"
  cp /home/ubuntu/.env.development /home/ubuntu/pcci
else
    echo "$FILE does not exist. Please set the .env.development file"
fi

# Start the app
NODE_ENV='test' npm run app:build
NODE_ENV='development' npm run app:start
NODE_ENV='development' npm run build
