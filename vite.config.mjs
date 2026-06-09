import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    fs: {
      // Work around path-encoding/normalization mismatches on macOS paths
      // that may include non-ASCII chars or special symbols.
      strict: false,
      allow: [rootDir],
    },
  },
});
