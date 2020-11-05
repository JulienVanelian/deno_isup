# isUp

> A (very) simple Deno module to check whether a host is up or not.

## Usage

```ts
import { isUp } from 'https://deno.land/x/deno_isup@v0.1.0/mod.ts'

console.log(await isUp('duckduckgo.com'))
```

The URL parameter can start with http(s):// or not, isUp will add https:// if the protocol is missing.

Important: you must run your program with --allow-net as this module will access internet.

## Running tests

```bash
deno test --allow-net
```

## Global install

You can install this module globally with:
```bash
deno install --allow-net -n isup mod.ts
```

Then use it from your CLI: 

```bash
$ isup duckduckgo.com
$ ✅ - duckduckgo.com is up!
```

## License

MIT License