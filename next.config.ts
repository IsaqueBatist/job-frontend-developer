import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['s1.ticketm.net'], // Adicione o domínio externo que você deseja permitir
  },
};

export default nextConfig;
