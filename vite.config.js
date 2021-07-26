import { createVuePlugin as Vue2Plugin } from 'vite-plugin-vue2';
const { resolve } = require('path');
const Dotenv = require('dotenv');

Dotenv.config();

const ASSET_URL = process.env.ASSET_URL || '';

export default {
    plugins: [
        Vue2Plugin(),
    ],

    root: 'resources',
    base: '',

    build: {
        outDir: resolve(__dirname, 'public/build'),
        emptyOutDir: true,
        manifest: true,
        target: 'es2018',
        rollupOptions: {
            input: '/js/app.js'
        }
    },

    server: {
        strictPort: true,
        port: 3000
    },

    resolve: {
        alias: {
            root: resolve(__dirname, 'resources', 'js'),
            modules: resolve(__dirname, 'resources', 'js', 'Store', 'modules'),
            views: resolve(__dirname, 'resources', 'views'),
            components: resolve(__dirname, 'resources', 'views','components'),
            helpers_path: resolve(__dirname, 'resources','js', 'Helpers'),
            routes_path: resolve(__dirname, 'resources','js', 'routers'),
        }
    },

    optimizeDeps: {
        include: [
            'vue',
            'portal-vue',
            '@inertiajs/inertia',
            '@inertiajs/inertia-vue',
            '@inertiajs/progress',
            'axios'
        ]
    }
}
