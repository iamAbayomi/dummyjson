```markdown
# E-Commerce Product Search Application

This is a multi-page e-commerce product search application built using Next.js and TypeScript. It allows users to search for products, view search results in a responsive grid layout, and view detailed information for each product. The app demonstrates API integration, dynamic routing, and component reusability.

## Table of Contents
1. [Setup and Running the Application](#setup-and-running-the-application)
2. [Project Structure and Architecture](#project-structure-and-architecture)
3. [Styling Decisions](#styling-decisions)
4. [Assumptions Made](#assumptions-made)
5. [Future Improvements](#future-improvements)

---

## Setup and Running the Application

### Prerequisites
- Ensure you have Node.js installed (version 14 or higher is recommended).
- Install npm or Yarn for package management.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ecommerce-search-app.git
   cd ecommerce-search-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Navigate to `http://localhost:3000` in your web browser to view the app.

## Project Structure and Architecture

The application is built with **Next.js** using the **App Router** for routing, with components and API services organized for modularity and reusability. Here’s an overview of the main folders:

- **`/components`**: Contains reusable components such as `Navbar`, `ProductCard`, and `ProductDetail` for consistent UI across pages.
- **`/pages`**: Includes the main pages of the application (`index`, `products/[id]`, and `products/search`).
- **`/services`**: Houses the `api.ts` file, which centralizes API interactions. This allows the `fetchProducts` and `fetchProductById` functions to handle data retrieval from the API.
- **`/types`**: Defines TypeScript types such as `Product`, ensuring type safety for API responses and component props.

### Key Architectural Decisions

1. **Next.js App Router**: Chosen for its efficient routing, dynamic page generation, and SEO benefits through static generation for selected product pages. The app uses `getServerSideProps` for search functionality to retrieve real-time search results.
2. **API Integration**: The app uses the `DummyJSON` API as a data source. The `fetchProducts` and `fetchProductById` functions are created to standardize the data retrieval process.
3. **CSS Grid for Responsive Design**: CSS grid is used to create a responsive, visually appealing product listing layout. The grid dynamically adjusts based on screen size, allowing the design to adapt smoothly to different devices.

### Styling Decisions

CSS is used to create a responsive grid design for the product listing on the search page (`/app/search/page.tsx`). Key points of the styling include:

- **Responsive Grid Layout**: A CSS grid layout is implemented with `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`, allowing product cards to adapt based on screen width.
- **Card Hover Effects**: Each product card has a subtle shadow and a hover effect to improve interactivity and user experience.
- **Consistent Padding and Centering**: The `product-card` component centers the product image, title, and price to provide a clean, balanced look.

## Assumptions Made

- **Static Product Pages**: Static generation (`getStaticPaths` and `getStaticProps`) is applied only to the first 10 products to optimize SEO and load time. All other products are loaded dynamically.
- **Non-functional "Add to Cart" Button**: The "Add to Cart" button is included as a placeholder, as per the task requirements. Full cart functionality is beyond the scope.

## Future Improvements

Given more time, the following features and enhancements could improve the application:

1. **Advanced Filtering and Sorting**: Implement filters (e.g., by price, category) and sorting options to improve user control over search results.
2. **Pagination for Search Results**: Implement pagination to handle larger datasets effectively and improve load times.
3. **Full "Add to Cart" Functionality**: Expand the cart button to enable item selection and add a cart management system.
4. **Enhanced SEO**: Improve SEO by pre-rendering more product pages and using structured data.
5. **Better Error Handling**: Add user-friendly error messages for network issues or empty search results.

---

This project demonstrates proficiency in TypeScript, Next.js routing, API integration, and creating responsive layouts with CSS grid. The design is modular, extensible, and follows best practices for a clean and maintainable codebase.
```