/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Statischer Export für GitHub Pages
  output: 'export',
  // Image Optimization deaktivieren (wird bei statischem Export nicht unterstützt)
  images: {
    unoptimized: true,
  },
  // Für username.github.io ist kein basePath nötig
  // Wenn du ein Projekt-Repository nutzt, entkommentiere:
  // basePath: '/dein-repo-name',
  // assetPrefix: '/dein-repo-name',
};

export default nextConfig;
