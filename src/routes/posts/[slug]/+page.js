import { fetchMarkdownFile } from '$lib/functions.js'

export async function load({ params }) {
    // Blog post
    const slug = params.slug;
    const file = await fetchMarkdownFile(slug)

    // Return parsed data
    return { file, slug }
}
