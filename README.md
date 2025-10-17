# worldcountries
A small responsive Vue app that lists countries and shows details in a modal. Built with Vue, Vuex, Axios and Bulma. It consumes the REST Countries API.

## Features
- Responsive UI with Bulma
- Country list with basic info
- Country details shown in a modal
- Vuex for state management
- Axios for API requests
- Unit tests and coverage reporting

## Prerequisites
- Node.js (v14+ recommended)
- npm (v6+)
- Git

## Quick start

1. Clone the repository
   ```
   git clone https://github.com/dadobos/worldcountries.git
   ```
2. Enter the project directory
   ```
   cd worldcountries
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Start the dev server
   ```
   npm run serve
   ```
5. Open http://localhost:8080/ in your browser

## Scripts

- `npm run serve` — start the dev server
- `npm run build` — build for production
- `npm test` — run unit tests
- `npm run coverage` — run tests and generate coverage report
- `npm run lint` — run linting (if configured)

## API

This project uses the REST Countries API:
https://restcountries.com

No API key is required.

## Testing
Run unit tests with:
```
npm test
```
Check full coverage:
```
npm run coverage
```

## Development notes
- Main frameworks: Vue + Vuex
- HTTP client: Axios
- Styling: Bulma
- Components are organized under `src/components`, store under `src/store`

If you add environment-specific endpoints or keys, use `.env` files and do not commit secrets.
