<!-- JS -->
<script>
    // Components
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'

    // Markdown
    // import { marked } from 'marked'

    // Get route
    export let data;
    const { info, body } = data;
</script>

<!-- Head -->
<svelte:head>
    <title>{info.title}</title>

    <!-- Visual -->
    <link rel="stylesheet" href="/index.css">
    <link rel="stylesheet" href="/css/project.css">
    <meta name="theme-color" content="#171718"/>

    <!-- Meta -->
    <meta property="og:title" content={info.title}>
    <meta property="og:description" content={info.description}>
    <!-- <meta property="og:url" content="https://notkal.com/posts/sample.html"> -->
    <!-- <meta property="og:image" content=""> -->
    <!-- <meta name="twitter:image:alt" content="Alt text for image"> -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:site_name" content="notkal.com">

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
    <div id="banner" class="banner" style={`background-image: url(${info.banner})`}></div>

    <!-- Title -->
    <div class="title_section container flex">
        <div>
            <h1>{info.title}</h1>
            <p id="path" class="secondary_text gray">
                <a href="/">notkal</a> / <a href="/posts">Posts</a> / <a href="./">{info.title}</a>
            </p>
        </div>
        <div class="title_buttons flex">
            
        </div>
    </div>
</header>


<!---------- Main ---------->
<main id="main" class="doc container flex">
    <!-- Sidebar -->
    <div class="info_column">
        <div class="info_content">

            <div class="user_card flex">
                <img src="https://avatars.githubusercontent.com/u/87151784?v=4" alt="">
                <div>
                    <a href={`https://github.com/${info.author}`} target="_blank" rel="noreferrer" class="emphasize bold">{info.author}</a>
                    <p class="secondary_text">Author</p>
                </div>
            </div>
            
            <br/>

            <div class="emphasize">
                <p class="emphasize">
                    Posted <span>{info.created}</span><br/>
                    <i class="secondary_text">Last updated <span>{info.modified}</span></i>
                </p>
                <br/>

                <div class="table_of_contents">
                    <b>Table of contents</b>
                    <hr>
                    <a href="#article"><p>Article Tag</p></a>
                    <a href="#another_article"><p>Another Article</p></a>
                </div>
            </div>
        </div>
    </div>

    <!-- Body -->
    <div class="body_column">
        {@html body}
    </div>
</main>

<!-- Footer -->
<Footer />
