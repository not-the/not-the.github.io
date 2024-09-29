<!-- JS -->
<script>
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import AllProjects from '$lib/components/AllProjects.svelte';
</script>



<!-- HEAD -->
<svelte:head>
    <title>Projects - notkal</title>

    <!-- Visual -->
    <link rel="stylesheet" href="/css/project.css">
    <meta name="theme-color" content="#171718"/>

    <link rel="stylesheet" href="/css/home.css">

    <!-- Meta -->
    <meta property="og:url" content="https://notkal.com/projects">
    <meta property="og:title" content="Projects - notkal">
    <!-- <meta property="og:description" content="undefined"> -->
    <!-- <meta property="og:image" content=""> -->
    <!-- <meta name="twitter:image:alt" content="Alt text for image"> -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:site_name" content="notkal">
</svelte:head>


<!-- HTML -->

<!---------- Navigation ---------->
<Navbar activeTab="Projects" />

<!-- Header -->
<header>
    <!-- Banner image -->
    <div id="banner" class="banner" style="background-image: linear-gradient(135deg, rgb(37, 26, 54) 0%, rgb(14, 24, 70) 100%)"></div>

    <!-- Title -->
    <div class="title_section container flex">
        <div>
            <h1>Projects</h1>
            <p id="path" class="secondary_text gray">
                <a href="/">notkal</a> / <a href="/projects">Projects</a>
            </p>
        </div>
        <div class="title_buttons flex">
            <select name="project_filter" id="project_filter">
                <option value="none">Filter</option>
                <option value="hi">Hi</option>
            </select>
        </div>
    </div>
</header>


<!---------- Main ---------->
<main class="container">
    <AllProjects />
</main>


<!---------- Footer ---------->
<Footer />
