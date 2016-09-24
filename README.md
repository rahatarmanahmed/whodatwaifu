# whodatwaifu
waifu twitter bot w/ microsoft cognitive services computer vision

## Installing
- Clone this repository
- `npm install`
- `npm run build`
- you need [t](https://github.com/sferik/t)
- run `t authorize` to get twitter creds
- you also need to get an api key for microsoft's computer vision api. do `export API_KEY=??????`


## Example usage
```sh
./tweet.sh [url to image]
```

it will tweet that image w/ the description microsoft says it is. i know, there's nothing waifu about this! the waifu was within you all along

but what i do is i set up cron to run this other unincluded script and a `waifus.txt` with a bunch of image urls on each line

```sh
waifus=$(head -n 1 waifus.txt)
t set active whodatwaifu
cd whodatwaifu
./tweet.sh $waifus
cd ..
tail -n +2 waifus.txt > waifus.txt.tmp && mv waifus.txt.tmp waifus.txt
```

i know it's bad but i don't care
