import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

/**
 * Two isolated Vitest projects:
 *  - unit: pure logic (composables, stores, utils) — no DOM, no component mounting.
 *  - integration: component-level tests that mount Vue components and hit
 *    a mocked network layer (MSW) to verify wiring between layers.
 *
 * End-to-end tests live outside Vitest entirely, under tests/e2e, and are
 * run by Playwright against a real running build.
 *
 * Vitest 4 replaced the separate `vitest.workspace.ts` file with a
 * `test.projects` array defined here; each entry still extends the base
 * Vite config so plugins/aliases stay consistent across projects.
 */
export default defineConfig({
  test: {
    projects: [
      {
        extends: './vite.config.ts',
        test: {
          name: 'unit',
          environment: 'jsdom',
          include: ['tests/unit/**/*.spec.ts'],
          root: fileURLToPath(new URL('./', import.meta.url)),
          setupFiles: ['./tests/setup.ts'],
        },
      },
      {
        extends: './vite.config.ts',
        test: {
          name: 'integration',
          environment: 'jsdom',
          include: ['tests/integration/**/*.spec.ts'],
          root: fileURLToPath(new URL('./', import.meta.url)),
          setupFiles: ['./tests/setup.ts'],
        },
      },
    ],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,vue}'],
      exclude: ['src/main.ts', 'src/**/*.d.ts', 'src/router/**'],
    },
  },
})