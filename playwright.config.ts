import { defineConfig, devices } from '@playwright/test';

const TEST_SERVER_URL = 'http://localhost:5173';

export default defineConfig({
  testDir: './test/e2e',
  outputDir: 'test-results',
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  expect: {
    timeout: 5_000,
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    baseURL: TEST_SERVER_URL,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run preview',
    url: TEST_SERVER_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
