import fs from 'node:fs'

import { HasuraGeneratorConfig } from 'src/types'

export function getSourceDirectories(config: HasuraGeneratorConfig) {
    return fs
        .readdirSync(config.sourceDirectory)
        .filter((path) => fs.statSync(`${config.sourceDirectory}/${path}`).isDirectory())
}
