import { marked } from 'marked'

export async function load({ params }) {

    // Blog post
    const slug = params.slug;
    const post = (await import(`$lib/data/posts/${slug}.md?raw`)).default;

    // Remove data section from document
    const body = marked(post.split("---\r\n")[2]);
    let info = post
        .split('---')[1] // Get data section
        .split("\r\n") // Split at new lines
        .filter(e => e !== "" && e !== "[data]") // Remove empty lines
        .map(e => { // Turn into object entry arrays & make keys lowercase
            let value = e.split(": ");
            value[0] = value[0].toLowerCase();
            return value;
        });
    info = Object.fromEntries(info);

    // Return parsed data
    return { info, body }
}