# E-Commerce Product Search Application

This project is a multi-page web application built with Next.js that allows users to search for e-commerce products and view detailed information about them. The app showcases proficiency in React, Next.js, TypeScript, API integration, and client-side routing.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Core Features](#core-features)
- [Libraries Used](#libraries-used)
- [Architectural Decisions](#architectural-decisions)
- [Future Improvements](#future-improvements)

## Installation

To set up and run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Running the Application

1. After starting the development server, open a browser and go to `http://localhost:3000`.
2. Use the search bar in the navigation to search for products by keywords.
3. The search results and product detail pages will be dynamically loaded.

## Project Structure

The project structure is as follows:

```
├── app
│   ├── layout.tsx          # Main layout for the application
│   ├── page.tsx            # Home page
│   └── search
│       └── page.tsx        # Search results page with filter and sorting
├── components
│   ├── Navbar.tsx          # Navigation bar with search input
│   └── ProductCard.tsx     # Component to display each product
├── services
│   └── api.ts              # API utility for fetching product data
└── types
    └── product.ts          # TypeScript interfaces for product data
```

## Core Features

### 1. **Product Search**
   - Users can search for products using a search bar in the `Navbar`.
   - The application fetches product data based on the query string and displays the search results on the `SearchPage`.

### 2. **Filter and Sort Options**
   - **Filter**: Allows users to filter products by category (e.g., Furniture, Groceries, Beauty).
   - **Sort**: Users can sort products by price, in ascending or descending order.

### 3. **Dynamic and Static Rendering**
   - A subset of product pages is pre-rendered statically to enhance SEO and load times.
   - Other pages are dynamically loaded to ensure scalability and a responsive user experience.

## Libraries Used

- **Next.js**: Provides server-rendering and static generation.
- **React**: Core library for UI components.
- **TypeScript**: Used throughout the application for type safety.
- **FontAwesome**: Icon library for UI icons.

## Architectural Decisions

- **Dynamic Query Handling with `useSearchParams`**: In the `SearchPage` component, we use the `useSearchParams` hook from `next/navigation` to handle search query parameters safely on the client side. This allows us to dynamically fetch and display products based on the user's search input.
  
- **Component-Based Architecture**: The application is organized with a reusable component structure. For example, the `ProductCard` component is used to display each individual product across pages.

- **Filtering and Sorting Logic**: Implemented directly within the `SearchPage` component. Filtering and sorting are managed through state hooks (`useState`) to enable real-time updates as users change options.

## Future Improvements

1. **Enhanced Cart Functionality**: Currently, the "Add to Cart" button is a mock action. Future updates could include a fully functional shopping cart with persistent storage.
2. **More Refined Sorting and Filtering**: Additional sorting criteria (e.g., ratings, popularity) could improve the user experience.
3. **Pagination for Search Results**: Implementing pagination or infinite scroll for search results could make handling larger data sets more efficient.
4. **Improved Error Handling**: Enhanced error messages and user feedback for cases where no products match the search query.
5. **SEO and Accessibility**: Further optimizations for SEO and accessibility could enhance the app’s usability and visibility on search engines.

--- 

This README provides instructions for setup, running the app, and detailed insights into the application’s architecture and potential improvements.