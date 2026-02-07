import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        // This adds 'font-poppins' as a utility class
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  // ...
};
export default config;