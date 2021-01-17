import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Jerrys Kebabs`,
    siteUrl: 'https://freeman.gatsby-pizza',
    description:
      'The best website design for pizza and kebab takeaways in Dorset!',
    twitter: '@nitecoda1',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of teh plugin being added
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'xy7bhb1f',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
