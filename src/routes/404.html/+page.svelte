<!-- JS -->
<script>
    // Components
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import Header from '$lib/components/Header.svelte'
</script>


<!-- HEAD -->
<svelte:head>
    <title>Page not found - notkal</title>

    <!-- Visual -->
    <link rel="stylesheet" href="/css/project.css">
    <meta name="theme-color" content="#171718"/>

    <!-- Meta -->
    <meta property="og:title" content="404 - notkal">
    <meta property="og:description" content="Page not found">
</svelte:head>


<!-- HTML -->

<!---------- Navigation ---------->
<Navbar />

<!-- Header -->
<Header banner={"unset"} title="Page not found (404)" path={false} />

<!---------- Footer ---------->
<Footer />
