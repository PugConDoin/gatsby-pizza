# Instructions for Starting up Gatsby Project

## File Structure

> documents / gatsby / slick-pizza

- gatsby (dir) FrontEnd
- sanity (dir) BackEnd
- this document

1. Install CURRENT version of Node.js
2. Download starter files from Wes' GitHub
3. Open each directory into two separate terminal tabs
4. Install all project dependencies for the project based on package.json:
   > npm install
5. Install global tooling:
   > npm install gatsby-cli @sanity/cli-g
6. Back to terminal pen each gatsby and sanity folder in their own VS Code window with
   > code .
7. Intsall recommended packages. Go to 'extensions' in VS Code and type into the search bar.
   > @recommended

## View Your Gatsby Build

Go to Gatsby folder in terminal

> npm start

~/Documents/gatsby/slicks-pizza/gatsby  npm start

> slicks-slices-frontend@0.1.0 start
> npm run develop

> slicks-slices-frontend@0.1.0 develop
> cross-env NODE_OPTIONS="-r esm" gatsby develop

After a short while we see a lot of success messages followed by a link to localhost to see slicks-slices-frontend in the browser: http://localhost:8000/

This will render index.js as the homepage.

We can also View GraphiQL, an in-browser IDE, to explore the site data and schema: http://localhost:8000/\_\_\_graphql
