import { PostgresDialect } from 'kysely';
import { defineConfig } from 'kysely-ctl';
import { Pool } from 'pg';

export default defineConfig({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.MIGRATION_DATABASE_URL,
      max: 1
    }),
  }),
  migrations: {
    migrationFolder: './src/migrations',
  },
  plugins: [],
  seeds: {
    seedFolder: 'seeds',
  },
});
