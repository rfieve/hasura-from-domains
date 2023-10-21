import fs from 'node:fs'

export function collectSources(sourceDirectory: string, domains: string[]) {
    const tables: string[] = []
    const constraints: string[] = []
    const triggers: string[] = []
    const permissions: string[] = []

    domains.forEach((domain) => {
        const files: string[] = fs.readdirSync(`${sourceDirectory}/${domain}`)

        files.forEach((file) => {
            if (file.endsWith('.tables.sql')) {
                tables.push(`${domain}/${file}`)
            }
            if (file.endsWith('.constraints.sql')) {
                constraints.push(`${domain}/${file}`)
            }
            if (file.endsWith('.triggers.sql')) {
                triggers.push(`${domain}/${file}`)
            }
            if (file.endsWith('.permissions.yml')) {
                permissions.push(`${domain}/${file}`)
            }
        })
    })

    return { tables, constraints, triggers, permissions }
}
