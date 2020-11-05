# Is up

> A (very) simple Deno module to check whether a host is up or not.

## Usage

```ts
import { isUp } from 'https://deno.land/x/deno_isup@v0.1.0/mod.ts';

console.log(await isUp('duckduckgo.com'))
```

The URL parameter can start with http(s):// or not, isUp will add https:// if the protocol is missing.

Important: you must run your program with --allow-net as this module will access internet.

## Running tests

```shell script
deno test --allow-net
```

## License

MIT License