<script>
    import PageBlog from "$lib/components/PageBlog.svelte";

    // Data
    import file from '$lib/data/markdown/about.md?raw'


    const slug = "about"
</script>

<!-- HEAD -->
<svelte:head>
    <!-- Email obfuscate -->
    <script src="/js/obfuscate.js" defer></script>
</svelte:head>


<!-- JS -->
<PageBlog {file} {slug} activeTab="About" />
