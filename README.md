# URL Shortener Project (Frontend)

## Overview

This project is a URL shortener application built with Angular. It allows users to create accounts, verify their email addresses, authenticate, and create their own shortened links. Users can view details such as click counts on their links. The frontend communicates with a separate backend service via HTTP requests.

## Features

- **User Registration:** Users can create accounts.
- **Email Verification:** Users must verify their email addresses to activate their accounts.
- **User Authentication:** Secure login for registered users.
- **URL Shortening:** Authenticated users can shorten URLs.
- **Link Management:** Users can view click counts and other details for their shortened URLs.

## Tech Stack

- **Frontend:** Angular
- **Backend:** (Consumed via HTTP requests)
- **Authentication:** JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/diegoambeliz/url-shortener-frontend.git
    cd url-shortener-frontend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

1. **Start the Angular development server:**
    ```sh
    ng serve
    ```

2. **Access the application:**
    Open your browser and go to `http://localhost:4200`.

## Usage

### User Registration

1. **Sign up:** Navigate to the registration page and create an account.
2. **Email Verification:** Check your email for a verification link and click on it to activate your account.
3. **Login:** Use your credentials to log in.

### URL Shortening

1. **Create a Short URL:** After logging in, navigate to the URL creation page, enter the long URL, and generate a short URL.
2. **View Link Details:** Go to the dashboard to view your shortened URLs and their click counts.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, please reach out to `your-email@example.com`.
