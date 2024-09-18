# Movie Snack Shop

Welcome to the **Movie Snack Shop** MVP, a simple React-based application for handling movie ticket and snack sales. This project is designed to use a local JSON server for storing and managing ticket and snack data. 

## Features

- Browse available snacks in the inventory
- Add snacks to the cart
- Complete a purchase using the cart
- View order history `(Ticket)`

## Project Structure

The project is structured with the following key components:

1. **Home**: Displays available tickets and snacks.
2. **Cart**: Allows users to view items added to their cart.
3. **Checkout**: Finalizes purchases and processes orders.
4. **Order History**: Displays a list of past purchases.

## Requirements

- **Node.js** and **npm** or **yarn**
- **React.js**
- **Local JSON Server**

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/movie-snack-shop.git
    cd movie-snack-shop
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up a local JSON server:

    Install `json-server` globally if you haven't already:

    ```bash
    npm install -g json-server
    ```

4. Start the JSON server:

    ```bash
    json-server --watch db.json --port 5000
    ```

    This will serve the `db.json` file as the mock backend for tickets and snacks data.

5. Start the React development server:

    ```bash
    npm start
    ```

### `db.json` Structure

```json
{
  "tickets": [
    {
      "id": 1,
      "movie": "Avengers: Endgame",
      "time": "7:00 PM",
      "price": 10
    },
    {
      "id": 2,
      "movie": "Joker",
      "time": "9:00 PM",
      "price": 8
    }
  ],
  "snacks": [
    {
      "id": 1,
      "name": "Popcorn",
      "price": 5
    },
    {
      "id": 2,
      "name": "Soda",
      "price": 3
    }
  ],
  "orders": []
}
```
## Available Scripts

  In the project directory, you can run:

  - **npm start:** Runs the app in the development mode.
  - **npm run build:** Builds the app for production.
  - **npm test:** Launches the test runner.
  - **json-server:** Starts the local JSON server to handle API requests.

## MVP Features

  - **Snack Sales:** Users can add snacks to their purchase.
  - **Shopping Cart:** Displays added tickets and snacks, and allows users to proceed to checkout.
  - **Order History:** Users can view their past purchases.

## Future Enhancements

  - Payment integration
  - User authentication
  - Enhanced UI with better styling
  - Database integration for persisting user data

## File Structure

                    movie-snack-shop/
                    ├── public/
                    │   ├── index.html
                    │   └── favicon.ico
                    ├── src/
                    │   ├── components/
                    │   │   ├── Cart.js
                    │   │   ├── Checkout.js
                            ├── CheckoutForm.js
                    │   │   ├── Home.js
                    │   │   ├── NavBar.js
                    │   │   ├── OrderHistory.js
                    │   │   ├── SnackItem.js
                    │   │   └── TicketItem.js
                    │   ├── services/
                    │   │   ├── api.js
                    │   ├── App.js
                    │   ├── index.js
                    │   ├── styles/
                    │   │   └── App.css
                    ├── db.json
                    ├── package.json
                    ├── README.md
                    └── .gitignore

## Explanation of Key Files

  - `components/:` Contains the React components.
  - `Cart.js:` Displays the cart with added items.
  - `Checkout.js:` Handles the checkout process.
  - `CheckoutForm.js:` Manages user input for customer details during checkout.
  - `Home.js:` The homepage displaying available tickets and snacks.
  - `NavBar.js:` A navigation bar for navigating through the app.
  - `OrderHistory.js:` Displays the list of past purchases.
  - `SnackItem.js & TicketItem.js:` Components for rendering snack and movie ticket details.
  - `services/api.js:` Handles API requests to the JSON server.
  - `db.json:` Local JSON file that mimics a backend for tickets, snacks, and orders.
  - `styles/:` Directory for CSS styles. App.css can be used for global styles.

## Contributing
This project was done by members of **SDF-PT07 Phase-2 group 10**

| No.  | Group 10 Members          |
|-----:|---------------------------|
|     1| Elle, Wato                |
|     2| Alio, Abdirahman Adan     |
|     3| Kaeni, Christine          |
|     4| Karimi, Kevin             |

## License
This project is licensed under the MIT License.


