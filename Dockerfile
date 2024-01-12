FROM ubuntu:latest
LABEL authors="eyalnaz"

ENTRYPOINT ["top", "-b"]
