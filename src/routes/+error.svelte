<!-- JS -->
<script>
    // Components
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
</script>


<!-- HEAD -->
<svelte:head>
    <title>notkal - Page not found</title>

    <!-- Visual -->
    <link rel="stylesheet" href="/css/project.css">
    <meta name="theme-color" content="#171718"/>

    <!-- Meta -->
    <meta property="og:title" content="notkal - 404">
    <meta property="og:description" content="Page not found">

    <!-- not-util -->
    <link rel="stylesheet" href="https://code.notkal.com/not-util.css" crossorigin>
    <script src="https://code.notkal.com/not-util.js" crossorigin></script>
</svelte:head>


<!-- HTML -->

<!---------- Navigation ---------->
<Navbar />

<!-- Header -->
<header>
    <!-- Banner image -->
    <div id="banner" class="banner"></div>

    <!-- Title -->
    <div class="title_section container">
        <h1>Page not found (404)</h1>
    </div>
</header>

<!---------- Footer ---------->
<Footer />
