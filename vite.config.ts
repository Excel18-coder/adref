import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	base: '/',
	plugins: [
		tsconfigPaths(),
		tanstackStart({
			prerender: {
				enabled: false,
			},
		}),
		react(),
		tailwindcss(),
	],
	assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp', '**/*.gif', '**/*.svg'],
	build: {
		assetsDir: 'assets',
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name]-[hash][extname]',
				entryFileNames: 'assets/[name]-[hash].js',
				chunkFileNames: 'assets/[name]-[hash].js',
			},
		},
		copyPublicDir: true,
	},
});
