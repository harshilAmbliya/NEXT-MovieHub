/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname:'image.tmdb.org'
        },
        {
          protocol: 'https',
          hostname:'fastly.picsum.photos'
        },
        {
          protocol: 'https',
          hostname:'occ-0-3933-116.1.nflxso.net'
        },
      ],
    },
  };
