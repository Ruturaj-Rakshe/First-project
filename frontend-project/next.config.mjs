/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        // This will disable the type checking during the build process
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
