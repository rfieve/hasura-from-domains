import fs from 'node:fs'

import { HasuraGeneratorConfig } from 'src/types'

function getMigrationId(index: number) {
    return `${index}`.padStart(10, '0')
}

function getMigrationName(file: string) {
    return file.split('/')[1].replace('.sql', '').split('.').reverse().join('_')
}

function getMigrationPath(
    config: HasuraGeneratorConfig,
    migrationId: string,
    migrationName: string
) {
    return `${config.migrationsPath}/${migrationId}_${migrationName}`
}

export function generateMigrations(config: HasuraGeneratorConfig, ...args: string[][]) {
    args.flat().forEach((file, index) => {
        const id = getMigrationId(index),
              name = getMigrationName(file),
              path = getMigrationPath(config, id, name)

        fs.mkdirSync(path, { recursive: true })
        fs.copyFile(`${config.sourceDirectory}/${file}`, `${path}/up.sql`, () => undefined)
    })
}
