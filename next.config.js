/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    skipTrailingSlashRedirect: true,
    images: { unoptimized: true }
}

module.exports = nextConfig
