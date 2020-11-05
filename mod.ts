export async function isUp(urlString: string) {
    if (!['http://', 'https://'].some(protocol => urlString.startsWith(protocol))) {
        urlString = 'https://' + urlString
    }

    const url = new URL(urlString)

    return await fetch(url).then((res: Response) => {
        res.body?.cancel()
        return true
    }).catch((res: Response) => {
        res.body?.cancel()
        return false
    })
}

if (import.meta.main) {
    if (!Deno.args.length) {
        Deno.exit(1)
    }

    let url = Deno.args[0]
    const up = await isUp(url)

    console.log(up ? `✅ - ${url} is up!` : `❌ - ${url} is down!`)
}