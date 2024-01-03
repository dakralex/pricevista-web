import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcssNesting from 'postcss-nesting';
import postcssCustomMedia from 'postcss-custom-media';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [
				postcssNesting,
				postcssCustomMedia
			]
		}
	}
});
