# Ticknovate
This project is implemented as a test task for Ticknovate. It is not production ready!

# Requirements
[Docker Community Edition](https://www.docker.com/community-edition)

# How to start
To start the app run: `docker-compose up` from the project root directory.

The node app then be started on port 3000.

# Endpoints

## Doubles the value of "number"

```sh
curl http://localhost:3000/api/double/:number
```

## Persistent counter of requests
```sh
curl http://localhost:3000/api/count
```

To make sure the counter is persistent, you can restart the node app with the command below and try to access the end-point again:
`docker-compose restart node-app`

## Fetching a Joke

```sh
curl http://localhost:3000/api/joke
```
