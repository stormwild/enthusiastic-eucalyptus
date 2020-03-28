#!/usr/bin/env bash

# Install dependencies
sudo chown -R $USER /home/ubuntu/pcci
cd /home/ubuntu/pcci
npm i

# Not secure, temporary
cp /home/ubuntu/.env /home/ubuntu/pcci
cp /home/ubuntu/.env.development /home/ubuntu/pcci
cp /home/ubuntu/.env.staging /home/ubuntu/pcci
cp /home/ubuntu/.env.production /home/ubuntu/pcci

# Start the app
# npm run app:build
# npm run app:start
# npm run build
