<!-- JS -->
<script>
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
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
<header>
    <!-- Banner image -->
    <div id="banner" class="banner" style="background-image: linear-gradient(135deg, rgb(37, 26, 54) 0%, rgb(14, 24, 70) 100%)"></div>

    <!-- Title -->
    <div class="title_section container flex">
        <div>
            <h1>All Posts</h1>
            <p id="path" class="secondary_text gray">
                <a href="/">notkal</a> / <a href="/posts">Posts</a>
            </p>
        </div>
        <div class="title_buttons flex">
            
        </div>
    </div>
</header>


<!---------- Main ---------->
<main class="container">
    <div class="project" id="web-development-resources">
        <div class="title_section flex">
            <div>
                <a href="/posts/web-development-resources/" class="project_link"><div class="project_link_area"></div></a>
                <h3>Web Development Resources</h3>
                <p class="secondary_text">not-the | November 24, 2023</p>
            </div>
        </div>
    </div>
    <div class="project" id="pixijs-mario-changelog">
        <div class="title_section flex">
            <div>
                <a href="/posts/pixijs-mario-changelog/" class="project_link"><div class="project_link_area"></div></a>
                <h3>PIXI.JS Mario Changelog</h3>
                <p class="secondary_text">not-the | June 17, 2023</p>
            </div>
        </div>
    </div>

    <div class="project" id="carrot-clicker-changelog">
        <div class="title_section flex">
            <div>
                <a href="/posts/carrot-clicker-changelog/" class="project_link"><div class="project_link_area"></div></a>
                <h3>Carrot Clicker Changelog</h3>
                <p class="secondary_text">not-the | August 22, 2022</p>
            </div>
        </div>
    </div>

    <!-- sample.html -->
    <div class="project" id="sample-html">
        <div class="title_section flex">
            <div>
                <a href="/posts/sample.html" class="project_link"><div class="project_link_area"></div></a>
                <h3>sample.html</h3>
                <p class="secondary_text">not-the | 1/1/1970</p>
            </div>
        </div>
    </div>
</main>


<!---------- Footer ---------->
<Footer />
