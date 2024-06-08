/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
          },
        ],
      },
    
};

export default nextConfig;


//must be named NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as next-cloudinary automatically reads it
