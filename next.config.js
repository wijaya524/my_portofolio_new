const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "@heroui/react",
      "@heroui/button",
      "@heroui/input",
      "@heroui/kbd",
      "@heroui/link",
      "@heroui/listbox",
      "@heroui/navbar",
      "@heroui/snippet",
      "@heroui/switch",
      "@heroui/system",
      "@heroui/theme",
      "lucide-react",
      "react-icons",
    ],
  },
});
