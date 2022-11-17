/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["www.google.com.br"],
  },
  headers: async () => {
    return [
      // {
      //   source: "/api/:path*",
      //   headers: [
      //     { key: "Access-Control-Allow-Origin", value: "*" },
      //     { key: "Access-Control-Allow-Methods", value: "GET" },
      //   ],
      // },
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET",
            value: "POST",
            value: "PUT",
            value: "DELETE",
          },
        ],
      },
      {
        source: "/api/ping",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
