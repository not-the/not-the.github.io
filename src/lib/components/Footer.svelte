<script>
    import { page } from '$app/stores';

    // Props
    export let title;

    // Breadcrumbs
    const separator = '<span class="breadcrumb_separator"> / </span>';
    const pathname = $page.url.pathname.substring(1);
    let splitPathname = splitAndAccumulate(pathname, "/");
    let breadcrumbs = "";

    if(pathname !== "") {
        breadcrumbs = separator + (splitPathname.map((e, index) => {

        // href
        const href = e === "home" ? "/" : e;

        // Name
        let formalPageName = "";
        if(index !== splitPathname.length-1 || title === undefined) {
            const pathSplit = e.split("/");
            formalPageName = toTitleCase(pathSplit[pathSplit.length-1].split("-").join(" "));
        }
        else {
            formalPageName = title;
        }

        // Crumb
        return breadcrumbHTML(href, formalPageName);
        })

        // Separator
        .join(separator));

        if(splitPathname[1] === "") breadcrumbs = "<p>Home</p>";
    }

    // Home
    else {
        breadcrumbs = '<span class="breadcrumb_separator"></span>' + breadcrumbHTML("", "Home");
    }


    /** Returns breadcrumb HTML */
    function breadcrumbHTML(href, formalPageName) {
        return `<a href="/${href}" class="secondary_text hover_emphasize">${formalPageName}</a>`
    }


    /** Get individual paths*/
    function splitAndAccumulate(str, delimiter) {
        const parts = str.split(delimiter);
        return parts.map((e, index) => parts.slice(0, index + 1).join(delimiter));
    }

    /** String to title case */
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(str){return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();});
    };
</script>


<!---------- Footer ---------->
<footer id="footer" class="flex">
    <div class="container">
        <!-- Navigation -->
        <nav>
            <div class="icons">
                <div class="ee_icon"><input type="color" name="easter_egg" id="easter_egg" value="#51a2ff" title="Click me!"></div>
                <div class="breadcrumbs footer_breadcrumbs">
                    {@html breadcrumbs}
                    <!-- breadcrumbs go here -->
                </div>
            </div>
    
            <!-- Columns -->
            <div class="footer_columns_container">
                <div>
                    <p><strong class="emphasize">Navigation</strong></p>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/posts">Blog</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
                <div>
                    <strong class="emphasize">Info</strong>
                    <ul>
                        <li><a href="/#contact">Contact</a></li>
                        <li><a href="/about/#privacy">Privacy</a></li>
                        <li><a href="/about/#copyright">Attribution</a></li>
                    </ul>
                </div>

                <!-- Spacer columns -->
                <div></div>
                <div></div>
            </div>
        </nav>
        <br/>

        <!-- Copyright -->
        <p class="emphasize">Ⓒ 2025 notkal.com</p>
        <br/>
        <a href="javascript:;" role="button" tabindex="0" onclick="toTop()">Return to top</a>
    </div>
</footer>
<div id="footer_gradient"></div>


<!---------- Overlays ---------->
<div id="backdrop"></div>