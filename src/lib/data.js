import { cache } from 'react';
import { promises as fs } from 'fs';
import path from 'path';

export const getProjects = cache(async () => {
  try {
    // Reading directly from the public folder for better build reliability
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading projects data from public folder:', error);
    return [];
  }
});
