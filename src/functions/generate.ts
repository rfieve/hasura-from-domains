import fs from 'node:fs'

import { cleanFolder } from './clean-folder'
import { collectSources } from './collect-sources'
import { generateMetadata } from './generate-metadata'
import { generateMigrations } from './generate-migrations'
import { HasuraGeneratorConfig } from '../types'

export function generate(config: HasuraGeneratorConfig) {
    const sources = fs.readdirSync(config.sourceDirectory)

    const { tables, constraints, triggers, permissions } = collectSources(
        config.sourceDirectory,
        sources
    )

    cleanFolder(config.migrationsPath)
    generateMigrations(config, tables, constraints, triggers)

    cleanFolder(config.metadataPath)
    generateMetadata(config, permissions)
}
