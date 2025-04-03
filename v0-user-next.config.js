/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // Désactiver temporairement l'optimisation des images pour le débogage
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

