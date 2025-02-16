export function generateHashtags(title: string, body: string): string[] {
    const content = `${title} ${body}`;
    const wordPattern = /\b[a-zA-Z]{9,}\b/g;
    
    // Find all words with 9+ characters and convert to hashtags
    const hashtags = (content.match(wordPattern) || [])
        .map(word => `#${word.toLowerCase()}`);
    
    return [...new Set(hashtags)]; // Remove duplicates
}