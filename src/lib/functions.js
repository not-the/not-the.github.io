import { marked } from 'marked'

// Format date
export function formatDate(value) {
    // Convert to date object if needed
    const date = typeof value === 'object' ? value : new Date(value);
    
    return date.toLocaleDateString('en-US',  {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}


/** Shorthand for grabbing blog post */
// export async function getBlogPost(postID) {
//     const file = await fetchMarkdownFile(postID);
//     return mdToFormatted(file);
// }

/** Takes a blog post ID and returns the raw file
 * @param {String} filename 
 * @returns Raw file
 */
export async function fetchMarkdownFile(filename) {
    const file = (await import(`$lib/data/posts/${filename}.md?raw`)).default;
    return file;
}

export function mdToFormatted(file) {
    const newLineRegex = /\r?\n/;
    const headerRowNewLineRegex = /---\s*\r?\n/;

    // Remove data section from document
    /** MD body with metadata removed */
    const bodyRaw = file.split(headerRowNewLineRegex)[2];
    /** Body parsed to HTML */
    const body = marked(bodyRaw);

    // Table of contents
    // const tableOfContents = bodyRaw.split(newLineRegex).filter(line => line.startsWith("#"));
    // console.log(tableOfContents);

    // Info
    let info = file
        .split(headerRowNewLineRegex)[1] // Get data section
        .split(newLineRegex) // Split at new lines
        .filter(e => e !== "" && e !== "---") // Remove empty lines
        .map(e => { // Turn into object entry arrays & make keys lowercase
            let value = e.split(": ");
            value[0] = value[0].toLowerCase();
            return value;
        });
    info = Object.fromEntries(info);

    return { info, body }
}


