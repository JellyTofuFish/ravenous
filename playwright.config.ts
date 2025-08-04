import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test/e2e',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    baseURL: 'http://localhost:5173',
  },
  webServer: {
    command: 'vite preview',
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
});
