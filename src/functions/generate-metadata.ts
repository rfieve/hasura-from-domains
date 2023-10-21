import fs from 'node:fs'

import { HasuraGeneratorConfig } from '../types'

export function generateMetadata(config: HasuraGeneratorConfig, ...args: string[][]) {
    args.flat().forEach((file) => {
        fs.copyFile(
            `${config.sourceDirectory}/${file}`,
            `${config.metadataPath}/${file}`,
            () => undefined
        )
    })
}
