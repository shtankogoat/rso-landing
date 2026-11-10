import type { NextConfig } from "next";
// Демо-лендинг РСО без функций: статическая сборка для GitHub Pages (rusport.org)
const config: NextConfig = { output: "export", images: { unoptimized: true }, trailingSlash: true, devIndicators: false, poweredByHeader: false };
export default config;
