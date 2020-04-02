#!/usr/bin/env bash

# Install dependencies
sudo chown -R $USER /home/ubuntu/pcci
cd /home/ubuntu/pcci
npm i

# Not secure, temporary
# cp /home/ubuntu/.env /home/ubuntu/pcci
# cp /home/ubuntu/.env.staging /home/ubuntu/pcci
# cp /home/ubuntu/.env.production /home/ubuntu/pcci

FILE=/home/ubuntu/.env.production
if [ -f "$FILE" ]; then
  echo "$FILE exists"
  cp /home/ubuntu/.env.production /home/ubuntu/pcci
else
    echo "$FILE does not exist. Please set the .env.production file"
fi

# Start the app
NODE_ENV='production' npm run app:build

APP_PID=$(lsof -t -i:443)
HTTP_PID=$(lsof -t -i:80)
if ! [ -z "$APP_PID" ]; then
  kill -9 $APP_PID
  kill -9 $HTTP_PID
else
  NODE_ENV='production' npm run app:start
fi

APP_PID=$(lsof -t -i:443)
HTTP_PID=$(lsof -t -i:80)
if ! [ -z "$APP_PID" ]; then
  NODE_ENV='production' npm run build
else
  NODE_ENV='production' npm run app:start
  NODE_ENV='production' npm run build
fi
