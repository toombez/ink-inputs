import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    dts: true,
    bundle: true,
    format: ['esm'],
    target: 'node16',
    splitting: true,
    outDir: 'lib',
    minify: !options.watch,
}))
