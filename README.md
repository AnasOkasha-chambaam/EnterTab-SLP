# EnterTab Simple Landing Page

This is a simple landing page for EnterTab, built with Next.js, React, and Tailwind CSS. The project includes various sections such as a header, contact form, and social media links.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [HeaderSection](#headersection)
  - [ContactSection](#contactsection)
  - [ContactForm](#contactform)
  - [EmailTemplate](#emailtemplate)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/entertab-slp.git
   cd entertab-slp
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Create a `.env` file based on the `.env.example` file and configure your environment variables.

## Usage

To start the development server, run:

```sh
pnpm dev
```

To build the project for production, run:

```sh
pnpm build
```

To start the production server, run:

```sh
pnpm start
```

## Components

### HeaderSection

The `HeaderSection` component displays the main header of the landing page, including a title, description, and client logos.

### ContactSection

The `ContactSection` component includes a contact form and social media links.

### ContactForm

The `ContactForm` component handles user input for the contact form and sends the data to the server.

### EmailTemplate

The `EmailTemplate` component is used to format the emails sent from the contact form.
