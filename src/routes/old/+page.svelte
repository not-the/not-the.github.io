<!-- JS -->
<script>
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'

    // Markdown
    import { marked } from 'marked'

    /** Get JSON - https://stackoverflow.com/a/22790025/11039898
     * @param {string} url JSON file URL
     * @param {boolean} parse Whether or not to convert into a JS object
     * @returns 
     */
    function get(url, parse=false) {
        var rq = new XMLHttpRequest(); // a new request
        rq.open("GET", url, false);
        rq.send(null);
        return parse ? JSON.parse(rq.responseText) : rq.responseText;
    }

    // Blog post
    import markdown from "$lib/data/posts/sample.md?raw"

    // Remove data section from document
    const markdownParsed = markdown.split("[/data]\r\n")[1];
    let data = markdown
        .split('[/data]')[0] // Get data section
        .split("\r\n") // Split at new lines
        .filter(e => e !== "" && e !== "[data]") // Remove empty lines
        .map(e => { // Turn into object entry arrays & make keys lowercase
            let value = e.split(": ");
            value[0] = value[0].toLowerCase();
            return value;
        });
    data = Object.fromEntries(data);
    // console.log(data);

</script>

<!-- Head -->
<svelte:head>
    <title>{data.title}</title>

    <!-- Visual -->
    <link rel="stylesheet" href="/index.css">
    <link rel="stylesheet" href="/project.css">
    <meta name="theme-color" content="#171718"/>

    <!-- Meta -->
    <meta property="og:title" content={data.title}>
    <meta property="og:description" content={data.description}>
    <!-- <meta property="og:url" content="https://notkal.com/posts/sample.html"> -->
    <!-- <meta property="og:image" content=""> -->
    <!-- <meta name="twitter:image:alt" content="Alt text for image"> -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:site_name" content="notkal.com">

    <!-- not-util -->
    <link rel="stylesheet" href="https://code.notkal.com/not-util.css" crossorigin>
    <script src="https://code.notkal.com/not-util.js" crossorigin></script>
</svelte:head>

<!-- Body -->
<div>
    <!---------- Navigation ---------->
    <Navbar />

    <!-- Header -->
    <header>
        <!-- Banner image -->
        <div id="banner" class="banner" style={`background-image: url(${data.banner})`}></div>

        <!-- Title -->
        <div class="title_section container flex">
            <div>
                <h1>{data.title}</h1>
                <p id="path" class="secondary_text gray">
                    <a href="/">notkal</a> / <a href="/posts">Posts</a> / <a href="./">{data.title}</a>
                </p>
            </div>
            <div class="title_buttons flex">
                
            </div>
        </div>
    </header>


    <!---------- Main ---------->
    <main id="main" class="doc container flex">
        <div class="info_column">
            <div class="info_content">

                <div class="user_card flex">
                    <img src="https://avatars.githubusercontent.com/u/87151784?v=4" alt="">
                    <div>
                        <a href={`https://github.com/${data.author}`} target="_blank" rel="noreferrer" class="emphasize bold">{data.author}</a>
                        <p class="secondary_text">Author</p>
                    </div>
                </div>
                
                <br/>

                <div class="emphasize">
                    <p class="emphasize">
                        Posted <span>{data.posted}</span><br/>
                        <i class="secondary_text">Last updated <span>{data.modified}</span></i>
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
        <div class="body_column">
            {@html marked(markdownParsed)}
        </div>
    </main>


    <Footer />

    <!-- JS -->
    <!-- <script src="/index.js"></script> -->

</div>