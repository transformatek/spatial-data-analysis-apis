# API WILAYA

This an api to fetch the **58 Wilaya** of algeria based on the parameters **lat** and **long**

### Built With

This api is built with :

* [Express.js][https://expressjs.com/]
* [Turf.js][https://turfjs.org/]

## Installing and Running the project

1. Clone the repo

```sh
git clone https://github.com/transformatek/spatial-data-analysis-apis.git
```
2. Go to apiWilaya

```bash
cd apiWilaya
```
3. Install NPM packages

```bash
npm install 
```
4. Run the project

```bash
node server
```

## Check using cURL

**Note :** the lat and long here are an example 

```bash
curl -X GET "http://localhost:3000/api/v1/getWilaya?lat=35&long=0"
curl -X GET "http://localhost:3000/api/v1/getCommune?lat=35&long=0"
```