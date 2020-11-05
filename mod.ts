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