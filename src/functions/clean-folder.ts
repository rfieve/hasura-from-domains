import fs from 'node:fs'

export function cleanFolder(path: string) {
    fs.rmSync(path, { recursive: true, force: true })
    fs.mkdirSync(path, { recursive: true })
}
