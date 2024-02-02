import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Import the 'path' module

// Convert the file URL to a file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = dirname(__filename);

// Define the Next.js configuration
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')], // Use 'path' here

    },
};

// Export the Next.js configuration
export default nextConfig;
