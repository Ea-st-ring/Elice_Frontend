module.exports = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false, // api 두번 호출 방지
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-api.elice.io',
      },
    ],
  },
}
