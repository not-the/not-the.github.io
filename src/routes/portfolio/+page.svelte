<!-- JS -->
<script>
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import Header from '$lib/components/Header.svelte'
    import AllProjects from '$lib/components/AllProjects.svelte'
</script>



<!-- HEAD -->
<svelte:head>
    <title>Portfolio - notkal</title>

    <!-- Visual -->
    <link rel="stylesheet" href="/css/project.css">
    <meta name="theme-color" content="#171718"/>

    <!-- <link rel="stylesheet" href="/css/home.css"> -->

    <!-- Meta -->
    <meta property="og:url" content="https://notkal.com/portfolio">
    <meta property="og:title" content="Portfolio - notkal">
    <!-- <meta property="og:description" content="undefined"> -->
    <!-- <meta property="og:image" content=""> -->
    <!-- <meta name="twitter:image:alt" content="Alt text for image"> -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:site_name" content="notkal">

    <!-- AOS -->
    <!-- <script src="https://unpkg.com/aos@next/dist/aos.js"></script> -->
</svelte:head>


<!-- HTML -->

<!---------- Navigation ---------->
<Navbar activeTab="Portfolio" />

<!-- Header -->
<Header title="Portfolio" path="Portfolio" />

<!-- <div class="title_buttons flex">
    <select name="project_filter" id="project_filter">
        <option value="none">Filter</option>
        <option value="hi">Hi</option>
    </select>
</div> -->


<!---------- Main ---------->
<main class="container">
    <!-- <AllProjects /> -->
</main>


<!---------- Footer ---------->
<Footer />
