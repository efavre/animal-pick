[![CircleCI](https://circleci.com/gh/efavre/animal-pick/tree/master.svg?style=svg)](https://circleci.com/gh/efavre/animal-pick/tree/master)

# random-pick
picks and returns a random value from a provided list


# Run locally:

```
npm install
npm test
npm start
```

# Run on docker

```
docker build -t animal-pick .
docker run -p 3001:3001 -d animal-pick
```

# Query

```
curl http://localhost:3000/animal-pick -v
```
