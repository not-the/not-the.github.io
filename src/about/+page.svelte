<script>
    import PageBlog from "../lib/components/PageBlog.svelte";

    // Data
    import file from '$lib/data/posts/about.md'


    const slug = "About"
</script>


<!-- JS -->
<PageBlog {file} {slug} />