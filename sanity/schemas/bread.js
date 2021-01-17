import { GiBread as icon } from 'react-icons/gi';

export default {
  name: 'bread',
  title: 'Breads',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Bread Name',
      type: 'string',
      description: 'Name of the Bread',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in pence',
      validation: (Rule) => Rule.min(250), // sets min price to £2.50
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array', // multiple lines of data
      of: [{ type: 'reference', to: [{ type: 'topping' }] }], // name of toppings table from topping.js
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    // add a preview of toppings under Pizza Name in Pizzas databsse of Sanity studio
    prepare: ({ title, media, ...toppings }) => {
      // 1. Filter out undefined toppiings
      const tops = Object.values(toppings).filter(Boolean);
      // 2. Return the preview object for pizza
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
