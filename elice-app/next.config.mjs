/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/courses',
        permanent: true,
      }
    ]
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true, // 클래스명에 컴포넌트 이름을 붙임
      pure: true, // dead code elimination (사용되지 않는 속성 제거)
    },
  },
  reactStrictMode: false, // api 두번 호출 방지
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-api.elice.io',
      },
    ],
  },
}

export default nextConfig
