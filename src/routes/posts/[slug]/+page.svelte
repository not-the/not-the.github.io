<!-- JS -->
<script>
    // Components
    import PageBlog from '$lib/components/PageBlog.svelte'

    // Get route
    export let data;
    const { file, slug } = data;
</script>

<!-- HTML -->
<PageBlog {file} {slug} />
