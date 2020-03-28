#!/usr/bin/env bash

# Check pre-requisites

# Install node
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

echo -e "Node $(node --version) successfully installed."
echo -e "NPM $(npm --version) successfully installed."

sudo rm -rf /home/ubuntu/pcci

echo -e "Removed existing folder at /home/ubuntu/pcci."

