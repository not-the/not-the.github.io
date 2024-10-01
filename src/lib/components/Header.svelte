<!-- JS -->
<script>
    export let banner, title, buttons, slug, path;

    let buttonArr = JSON.parse(buttons ?? "false");

    const breadcrumbs = !path ?
        `<a href="/posts">Posts</a> / <a href="${slug}">${title}</a>` : // In /posts/
        path.split('/')
            .map(crumb => {
                return `<a href="${crumb.toLowerCase()}">${crumb}</a>`;
            })
            .join(' / ');
</script>


<!-- HTML -->
<header>
    <!-- Banner image -->
    <div id="banner" class="banner" style={`background-image: ${banner}`}></div>

    <!-- Title -->
    <div class="title_section container flex">
        <div class="title_left">
            <div class="blog_title_container">
                <h1>{title}</h1>
            </div>
            {#if path !== false}
                <p id="path" class="secondary_text gray">
                    <a href="/">notkal</a> / {@html breadcrumbs}
                </p>
            {/if}
        </div>

        <!-- Buttons -->
        {#if buttons !== undefined}
            <div class="title_buttons flex">
                {#each buttonArr as data}
                    <a href={data.href} target="_blank" rel="noreferrer">
                        <div class="button bold">
                            <!-- <img src="/assets/icon/hamburger.svg" alt="" class="button_icon"> -->
                            <p>
                                {data.name}
                            </p>
                            {#if data.external}
                                <img src="/assets/icon/external_link.svg" alt="" class="button_icon">
                            {/if}
                            <div class="button_shade"></div>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</header>