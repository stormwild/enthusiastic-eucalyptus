#!/usr/bin/env bash

# Check pre-requisites
# Install MongoDb
if ! [ -x "$(command -v mongod)" ]; then
  echo 'MongoDb not installed. Installing now'
  wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
  echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
  sudo apt-get update
  sudo apt-get install -y mongodb-org
  sudo systemctl start mongod
  sudo systemctl status mongod
  sudo systemctl enable mongod
fi

# Install node
if ! [ -x "$(command -v node)" ]; then
  curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
  sudo apt-get install -y nodejs
  echo -e "Node $(node --version) successfully installed."
  echo -e "NPM $(npm --version) successfully installed."
fi

sudo rm -rf /home/ubuntu/pcci

echo -e "Removed existing folder at /home/ubuntu/pcci."

