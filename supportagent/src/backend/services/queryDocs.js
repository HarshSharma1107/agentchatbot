import axios from 'axios';
import * as cheerio from 'cheerio';
import Fuse from 'fuse.js';

/**
 * Fetches and processes documentation for a given platform.
 *
 * @param {string} platform - The name of the platform (e.g., Segment, mParticle)
 * @param {string} query - The user's search query
 * @returns {Promise<Array>} - A promise resolving to an array of relevant documentation sections
 */
export const fetchDocumentation = async (platform, query) => {
  const platformUrls = {
    Segment: 'https://segment.com/docs/?ref=nav',
    mParticle: 'https://docs.mparticle.com/',
    Lytics: 'https://docs.lytics.com/',
    Zeotang: 'https://docs.zeotap.com/home/en-us/',
  };

  // Validate platform
  if (!platformUrls[platform]) {
    throw new Error(`Unsupported platform: ${platform}`);
  }

  const baseUrl = platformUrls[platform];

  try {
    // Fetch documentation HTML
    const response = await axios.get(baseUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      },
    });

    // Load HTML content into Cheerio
    const $ = cheerio.load(response.data);

    // Extract relevant sections
    const sections = [];
    $('main, .content, .documentation-section').each((index, element) => {
      const title = $(element).find('h1, h2, h3').text() || 'Untitled Section';
      const content = $(element).text().trim();

      if (content) {
        sections.push({ title, content });
      }
    });

    // Perform fuzzy search
    const fuseOptions = {
      includeScore: true,
      threshold: 0.3,
      keys: ['content'],
    };
    const fuse = new Fuse(sections, fuseOptions);
    const searchResults = fuse.search(query);

    // Return relevant sections
    return searchResults.map(result => result.item);
  } catch (error) {
    console.error(`Error fetching documentation for ${platform}:`, error);
    return [];
  }
};
