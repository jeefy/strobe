FROM ubuntu:14.04

COPY bin/iojs-setup.sh /iojs.sh

RUN apt-get update && \
    apt-get -y install build-essential libssl-dev curl && \
    bash /iojs.sh 

COPY app /app/

ENTRYPOINT /app/start.sh