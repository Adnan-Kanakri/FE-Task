# FE Task

A modern expense management system built with React, TypeScript, and Material-UI that allows users to track and manage their expenses efficiently.

## Features

- 📊 Interactive Data Grid for expense display
- 📄 Expense add
- 🔍 Filtering capabilities
- 💰 Expense numbers display
- 📈 Status tracking (Approved, Pending, Rejected)
- 📄 Pagination support
- 📄 Card display with status color and pagination
- 📄 Card add

## Tech Stack

- Next.js with App Router
- React
- TypeScript
- Material-UI (MUI)
- MUI X Data Grid
- Context API for state management
- PNPM (Package Manager)
- Yup for validation
- React Hook Form for form handling
- React Toastify for notifications

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- PNPM (v8 or higher)

### Installing PNPM

If you haven't installed PNPM yet, you can install it using one of these methods:

1. Using npm:

```bash
npm install -g pnpm
```

2. Using PowerShell (Windows):

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

3. Using curl (macOS/Linux):

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

## Project Structure

```
src/
├── app/
│   └── expenses/
│       └── _components/
│           └── expenses/
│               └── Expenses.tsx    # Main expenses component
│           └── add-expenses/
│               └── AddExpenses.tsx    #  add expenses component
│           └── filter/
│               └── Filter.tsx    #  filter component
│   └── cards/
│       └── _components/
│           └── cards/
│               └── Cards.tsx    # Main cards component
│           └── add-card/
│               └── AddCard.tsx    #  add card component

├── components/
│   └── show-date/
│       └── ShowDate.tsx           # Date formatting component
│   └── form/
│       └── Form.tsx    # form component
│   └── form-component/
│       └── form-input/
│           └── FormInput.tsx    # form input component
│       └── form-select/
│           └── FormSelect.tsx    # form select component
├── context/
│   └── RootContext.tsx            # Global state management
├── service/
│   └── fe-task.service.ts         # API service layer
├── utils/
│   └── main.ts                    # Utility functions
└── endpoints/
    └── dtos.ts                    # types for the endpoints
```

## Components

### Expenses Component

The main component that displays the expense data in a grid format. Features include:

- Data Grid with sorting and pagination
- Custom footer showing total expenses
- Status indicators
- Date formatting
- Amount display

### Cards Component

The main component that displays the expense data in a grid format. Features include:

- Data Grid with pagination
- Custom footer showing total Cards
- Status indicators
- Date formatting

#### State Management

Uses the RootContext for managing:

- Expenses data
- Filter state
- Global application state

## Data Structure

```typescript
interface ICardData {
  id: string;
  cardholderName: string;
  last4Digits: string;
  status: "Active" | "Inactive";
  issuedAt: string;
}
```

### Expense Data Interface

```typescript
interface IExpenseData {
  id: string;
  amount: number;
  createdAt: string;
  description: string;
  status: "Approved" | "Pending" | "Rejected";
}
```

## Setup and Installation

1. Clone the repository

```bash
git clone [repository-url]
```

2. Navigate to the project directory

```bash
cd fe-task
```

3. Install dependencies using PNPM

```bash
pnpm install
```

4. Start the development server

```bash
pnpm run dev
```

## Available Scripts

- `pnpm run dev` - Start the development server
- `pnpm run build` - Build the project for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## Usage

The expense management system provides the following features:

1. **View Expenses**

   - Display expenses in a paginated grid
   - Sort by different columns
   - Filter expenses by status

2. **Expense Details**

   - View expense amount
   - Check expense status
   - See creation date
   - Read expense description

3. **Pagination**
   - Navigate through pages
   - Adjust items per page
   - View total number of expenses
