#!/bin/bash
docker build -t "jeefy/strobe" . && \
docker build -t "jeefy/strobe-light" container/
docker run -v /var/run/docker.sock:/var/run/docker.sock -p 5050:5050 -ti "jeefy/strobe"
