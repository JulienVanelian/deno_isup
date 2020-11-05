import { assertEquals } from 'https://deno.land/std@0.76.0/testing/asserts.ts'
import { isUp } from './mod.ts'

Deno.test('Reaching existing host', async () => {
    assertEquals(await isUp('duckduckgo.com'), true)
})

Deno.test('Reaching non-existing host', async () => {
    assertEquals(await isUp('duckduckgoo.comrade'), false)
})