# Ritease Assessment

## Overview
This project is a Next.js application designed for handling PDF document uploads, annotations, and exports. It utilizes the [DocuSeal](https://docuseal.co/) PDF React package to provide essential document management functionalities, including:

- Uploading and displaying PDF documents
- Annotating documents with highlights, underlines, comments, and signatures
- Exporting annotated PDFs with embedded annotations while maintaining the original document quality

## Technologies Used
- **Next.js** - A React framework for building web applications.
- **DocuSeal PDF React Package** - Enables document upload, annotation, and export functionalities.
- **TypeScript** - Ensures type safety and maintainability.
- **Tailwind CSS** (or any other styling framework, if applicable) for UI design.

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (or yarn, pnpm, bun)

### Installation
Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/your-repo/ritease-assessment.git

# Navigate into the project directory
cd ritease-assessment

# Install dependencies
npm install  # or yarn install, pnpm install, bun install
```

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev  # or yarn dev, pnpm dev, bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Features Implemented

### Document Upload
- Users can upload PDF documents.
- Drag-and-drop functionality and file selection dialog for easy uploads.
- Uploaded documents are displayed in a viewport.

### Annotation Features
- **Highlighting:** Users can highlight text with customizable colors.
- **Underlining:** Users can underline text with customizable colors.
- **Comments:** Users can attach comments to specific parts of the document.
- **Signatures:** Users can draw signatures anywhere on the document.

### Document Export
- Users can export the annotated document as a PDF.
- All annotations and signatures are embedded properly in the exported document.
- The exported document maintains the quality of the original PDF.

## Challenges & Solutions
One of the major challenges faced during development was exporting the edited document while ensuring that annotations and signatures remained embedded properly. This issue was resolved by carefully studying the package documentation to understand the best approach before implementing the required functionalities.

## Learn More
To learn more about Next.js and the tools used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [DocuSeal Documentation](https://docuseal.co/) - Explore the full capabilities of the DocuSeal PDF React package.

## Deployment
The easiest way to deploy this Next.js application is through [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Follow the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributions
Contributions and feedback are welcome! Feel free to fork this repository and submit a pull request with your improvements.

## License
This project is licensed under the [MIT License](LICENSE).

