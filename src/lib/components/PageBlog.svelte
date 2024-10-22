<!-- JS -->
<script>
    // Components
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import Header from '$lib/components/Header.svelte'
    import Tags from './Tags.svelte'
    // import CardProject from '$lib/components/CardProject.svelte'

    // Functions
    import { mdToFormatted, formatDate } from '$lib/functions.js'

    // Props
    export let file, slug, activeTab;

    // Get post info
    const { info, body } = mdToFormatted(file);
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
<Header banner={info.banner} title={info.title} buttons={info.buttons} path={info.path} {slug} header_theme={info.header_theme} />


<!---------- Main ---------->
<main id="main" class="doc container flex">
    <!-- Body -->
    <div class="body_column">
        {@html body}
    </div>

    <!-- Sidebar -->
    <div class="info_column">
        {#if !info.hide_info}
            <div class="info_content">

                <!-- Author card -->
                {#if info.author}
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
                {/if}

                <!-- Metadata -->
                {#if info.created}
                    <div class="info_meta info_item">
                        <p>
                            Posted<br />
                            <span class="emphasize">{formatDate(info.created)}</span><br/>
                        </p>

                        {#if info.modified}
                            <p>
                                Last updated<br />
                                <span class="emphasize">{formatDate(info.modified)}</span>
                            </p>
                        {/if}
                    </div>
                {/if}

                <!-- Tags -->
                {#if info.tags}
                    <div class="info_item">
                        <Tags tagsString={info.tags} />
                    </div>
                {/if}

                <!-- Table of contents -->
                {#if info.contents}
                    <nav class="table_of_contents info_item" aria-label="Contents">
                        <strong>Contents</strong><br />
                        <ul>
                            {#each JSON.parse(info.contents) as item}
                                <li>
                                    <a href={`#${item.id}`}>
                                        <p>{item.name}</p>
                                    </a>

                                    <!-- Children -->
                                    {#if item.children}
                                        <ul>
                                            {#each item.children as child}
                                                <li>
                                                    <a href={`#${child.id}`}><p>{child.name}</p></a>
                                                </li>
                                            {/each}
                                        </ul>
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    </nav>
                {/if}

            </div>
        {/if}
    </div>
</main>

<!-- Footer -->
<Footer title={info.title} />
