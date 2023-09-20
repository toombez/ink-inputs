import { defineConfig } from 'tsup'

export default defineConfig({
    outDir: 'dist',
    bundle: true,
    format: ['esm'],
    target: 'node16',
})
