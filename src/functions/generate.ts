import { cleanFolder } from './clean-folder'
import { generateMetadata } from './generate-metadata'
import { generateMigrations } from './generate-migrations'
import { getSourceDirectories } from './get-source-directories'
import { getSourceFiles } from './get-source-files'
import { HasuraGeneratorConfig } from '../types'

export function generate(config: HasuraGeneratorConfig) {
    const sourceDirectories = getSourceDirectories(config),
          sourceFiles = getSourceFiles(config, sourceDirectories),
          { tables, constraints, triggers, permissions } = sourceFiles

    cleanFolder(config.migrationsPath)
    generateMigrations(config, tables, constraints, triggers)

    cleanFolder(config.metadataPath)
    generateMetadata(config, permissions)
}
