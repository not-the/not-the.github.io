<!-- JS -->
<script>
    export let banner, title, slug, path;

    const breadcrumbs = path === undefined ?
        `<a href="/posts">Posts</a> / <a href="${slug}">${title}</a>` : // In /posts/
        path.split('/')
</script>


<!-- HTML -->
<header>
    <!-- Banner image -->
    <div id="banner" class="banner" style={`background-image: url('${banner}')`}></div>

    <!-- Title -->
    <div class="title_section container flex">
        <div class="title_left">
            <div class="blog_title_container">
                <h1>{title}</h1>
            </div>
            <p id="path" class="secondary_text gray">
                <a href="/">notkal</a> / {@html breadcrumbs}
            </p>
        </div>
        <div class="title_buttons flex">
            
        </div>
    </div>
</header>