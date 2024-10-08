<!-- JS -->
<script>
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import Header from '$lib/components/Header.svelte'
    import CardBlog from '$lib/components/CardBlog.svelte'

    // Functions
    import { mdToFormatted } from '$lib/functions.js'

    // Posts (temporary solution)
    import p0 from '$lib/data/posts/carrot-clicker-changelog.md?raw'
    import p1 from '$lib/data/posts/pixijs-mario-changelog.md?raw'
    import p2 from '$lib/data/posts/web-development-resources.md?raw'
    import p3 from '$lib/data/posts/sample.md?raw'

    const posts = [
        mdToFormatted(p0),
        mdToFormatted(p1),
        mdToFormatted(p2),
        mdToFormatted(p3),
    ].reverse();
</script>



<!-- HEAD -->
<svelte:head>
    <title>Posts - notkal</title>

    <!-- Visual -->
    <link rel="stylesheet" href="/css/project.css">
    <meta name="theme-color" content="#171718"/>

    <link rel="stylesheet" href="/css/home.css">

    <!-- Meta -->
    <meta property="og:url" content="https://notkal.com/posts">
    <meta property="og:title" content="Posts - notkal">
    <!-- <meta property="og:description" content="undefined"> -->
    <!-- <meta property="og:image" content=""> -->
    <!-- <meta name="twitter:image:alt" content="Alt text for image"> -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:site_name" content="notkal">
</svelte:head>



<!-- HTML -->

<!---------- Navigation ---------->
<Navbar activeTab="Blog" />

<!-- Header -->
<Header banner="linear-gradient(135deg, rgb(37, 26, 54) 0%, rgb(14, 24, 70) 100%)" title="Blog" path="Posts" />


<!---------- Main ---------->
<main class="container cards_container">
    {#each posts as { info, body }}
        <CardBlog postID={info.id} {info} {body} />
    {/each}
</main>


<!---------- Footer ---------->
<Footer />
