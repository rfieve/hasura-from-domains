# ✌️🔗🧭 hasura-from-domains

A TypeScript tool to write domain elements to hasura.

## Table of Content

-   [✌️🔗🧭 hasura-from-domains](#️-hasura-from-domains)
    -   [Table of Content](#table-of-content)
    -   [Installation](#installation)
    -   [Usage](#usage)

## Installation

```sh
yarn add @romainfieve/hasura-from-domains
```

or

```sh
npm install @romainfieve/hasura-from-domains
```

## Usage

```typescript
// ...
// |__ hasura
// |   |__ metadata
// |   |__ migrations
// |       |__ default
// |
// |__ src
//     |__ domains
//         |__ users
//             |__ user.permissions.yml
//             |__ user.constraints.sql
//             |__ user.tables.sql
//             |__ user.triggers.sql
// ...

generate({
    metadataPath: './hasura/metadata',
    migrationsPath: './hasura/migrations/default',
    sourceDirectory: './src/domains',
})

// ...
// |__ hasura
// |   |__ metadata
// |   |__ migrations
// |       |__ default
// |           |__ 0000000000_tables_user
// |           |   |__ up.sql
// |           |__ 0000000001_constraints_user
// |           |   |__ up.sql
// |           |__ 0000000002_triggers_user
// |               |__ up.sql
// |
// |__ src
//     |__ domains
//         |__ users
//             |__ user.permissions.yml
//             |__ user.constraints.sql
//             |__ user.tables.sql
//             |__ user.triggers.sql
// ...
```

---
