export async function load({ params }) {

    // Blog post
    const slug = params.slug;
    const file = (await import(`$lib/data/posts/${slug}.md?raw`)).default;

    // Return parsed data
    return { file, slug }
}