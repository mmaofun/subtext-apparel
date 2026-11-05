const isPagesExport = process.env.GITHUB_PAGES === 'true';
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isPagesExport ? { output: 'export', trailingSlash: true } : {}),
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: isPagesExport,
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com'],
  },
};

export default nextConfig;
