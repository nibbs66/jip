import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    ssr: {
        noExternal: ["svelte-hero-icons"],
    },
	plugins: [sveltekit()]
});
