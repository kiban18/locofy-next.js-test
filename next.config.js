/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    // outDir 설정 추가: 내보낼 디렉토리 지정
    outDir: 'build'
  }

  module.exports = nextConfig