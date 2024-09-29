<!-- JS -->
<script>
    import { marked } from 'marked'

    // Components
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'

    // Props
    export let file, slug;

    // Remove data section from document
    let bodyRaw = file.split("---\r\n")[2];
    console.log(`##### START PageBlog: ${slug}`);
    console.log("### file");
    console.log(file);
    console.log("### bodyRaw");
    console.log(bodyRaw);
    const body = marked(bodyRaw);
    console.log(`##### END PageBlog`);

    let info = file
        .split('---')[1] // Get data section
        .split("\r\n") // Split at new lines
        .filter(e => e !== "" && e !== "---") // Remove empty lines
        .map(e => { // Turn into object entry arrays & make keys lowercase
            let value = e.split(": ");
            value[0] = value[0].toLowerCase();
            return value;
        });
    info = Object.fromEntries(info);

    // console.log(info);
</script>


<!-- Head -->
<svelte:head>
    <title>{info.title}</title>

    <!-- Visual -->
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/project.css">
    <meta name="theme-color" content="#171718"/>

    <!-- Meta -->
    <meta property="og:title" content={info.title}>
    <meta property="og:description" content={info.description}>
    <meta property="og:url" content={`https://notkal.com/posts/${slug}`}>
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
    <div id="banner" class="banner" style={`background-image: url('${info.banner}')`}></div>

    <!-- Title -->
    <div class="title_section container flex">
        <div>
            <h1>{info.title}</h1>
            <p id="path" class="secondary_text gray">
                <a href="/">notkal</a> / <a href="/posts">Posts</a> / <a href={`./${slug}`}>{info.title}</a>
            </p>
        </div>
        <div class="title_buttons flex">
            
        </div>
    </div>
</header>


<!---------- Main ---------->
<main id="main" class="doc container flex">
    <!-- Sidebar -->
    {#if !info.hide_info}
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
                        <!-- <a href="#article"><p>Article Tag</p></a> -->
                        <!-- <a href="#another_article"><p>Another Article</p></a> -->
                    </div>
                </div>
            </div>
        </div>
    {/if}

    <!-- Body -->
    <div class="body_column">
        {@html body}
    </div>
</main>

<!-- Footer -->
<Footer />
