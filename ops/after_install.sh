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
BABEL_ENV='test' npm run app:build

APP_PID=$(lsof -t -i:3000)
if ! [ -z "$APP_PID" ]; then
  kill -9 $APP_PID
else
  NODE_ENV='development' npm run app:start
fi

APP_PID=$(lsof -t -i:3000)
if ! [ -z "$APP_PID" ]; then
  NODE_ENV='development' npm run build
else
  NODE_ENV='development' npm run app:start
  NODE_ENV='development' npm run build
fi
