import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.0.108"],
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
