#!/bin/bash
cd /app/
if [ ! -d node_modules/ ]; then
    npm install 
fi

iojs server.js