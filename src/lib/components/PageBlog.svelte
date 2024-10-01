<!-- JS -->
<script>
    import { marked } from 'marked'

    // Components
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import Header from '$lib/components/Header.svelte'

    // Props
    export let file, slug, activeTab;


    const newLineRegex = /\r?\n/;
    const headerRowNewLineRegex = /---\s*\r?\n/;

    // Remove data section from document
    /** MD body with metadata removed */
    const bodyRaw = file.split(headerRowNewLineRegex)[2];
    /** Body parsed to HTML */
    const body = marked(bodyRaw);

    // Table of contents
    // const tableOfContents = bodyRaw.split(newLineRegex).filter(line => line.startsWith("#"));
    // console.log(tableOfContents);

    // Info
    let info = file
        .split(headerRowNewLineRegex)[1] // Get data section
        .split(newLineRegex) // Split at new lines
        .filter(e => e !== "" && e !== "---") // Remove empty lines
        .map(e => { // Turn into object entry arrays & make keys lowercase
            let value = e.split(": ");
            value[0] = value[0].toLowerCase();
            return value;
        });
    info = Object.fromEntries(info);

    // console.log(info);


    // Format date
    function formatDate(value) {
        // Convert to date object if needed
        const date = typeof value === 'object' ? value : new Date(value);
        
        return date.toLocaleDateString('en-US',  {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
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
</svelte:head>


<!-- HTML -->

<!---------- Navigation ---------->
<Navbar {activeTab} />

<!-- Header -->
<Header banner={info.banner} title={info.title} buttons={info.buttons} path={info.path} {slug} />


<!---------- Main ---------->
<main id="main" class="doc container flex">
    <!-- Body -->
    <div class="body_column">
        {@html body}
    </div>

    <!-- Sidebar -->
    {#if !info.hide_info}
        <div class="info_column">
            <div class="info_content">

                <!-- Author card -->
                <a class="user_card flex"
                    href={`https://github.com/${info.author}`}
                    target="_blank" rel="noreferrer"
                >
                    <img src="https://avatars.githubusercontent.com/u/87151784?v=4" alt="">
                    <div>
                        <strong class="emphasize bold">{info.author}</strong><br/>
                        <span class="secondary_text">Author</span>
                    </div>
                </a>

                <!-- Metadata -->
                <div class="info_meta">
                    <p>
                        Posted<br />
                        <span class="emphasize">{formatDate(info.created)}</span><br/>
                    </p>
                    <p>
                        Last updated<br />
                        <span class="emphasize">{formatDate(info.modified)}</span>
                    </p>
                </div>

                <!-- Table of contents -->
                {#if info.contents}
                    <nav class="table_of_contents" aria-label="Contents">
                        <strong>Contents</strong><br />
                        <ul>
                            {#each JSON.parse(info.contents) as item}
                                <li>
                                    <a href={`#${item.id}`}><p>{item.name}</p></a>
                                </li>
                            {/each}
                        </ul>
                    </nav>
                {/if}

            </div>
        </div>
    {/if}
</main>

<!-- Footer -->
<Footer />
