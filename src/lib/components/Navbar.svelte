<script>
    import { onMount } from "svelte";

    export let activeTab;


    /** Nav list */
    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Projects",
            href: "/projects"
            //, onclick: "toggleMenu()"
        },
        {
            name: "Blog",
            href: "/posts"
        },
        {
            name: "About",
            href: "/about"
        }
    ];

    /** Returns a boolean depending on if the current page matches a given nav button */
    function isActiveNav(href="") {
        if(href === activeTab) return true;
    }
</script>

<!-- Navbar -->
<nav id="nav" class="container overlay_element nav_transparent">

    <!-- Inner -->
    <div class="inner flex">
        <!-- Menu button -->
        <div role="button" tabindex="0" id="menu_button" class="nav_button">
            <img src="/assets/icon/hamburger.svg" alt="Menu" id="menu_button_icon" class="icon button_icon">
        </div>

        <!-- Icon -->
        <div id="main_icon_wrapper">
            <img src="/assets/icon_96x.png" alt="notkal.com" id="main_icon">
        </div>

        <span id="site_title">notkal</span>

        <div class="flex" id="hamburger_menu">
            <!-- Nav items -->
            <div id="nav_list" class="flex">
                {#each navList as { name, href, onclick }}
                    <a class="nav_item" {href} {onclick} data-active={isActiveNav(name)} >
                        {name}
                        <div class="button_bubble_container"/>
                    </a>
                {/each}
            </div>
        </div>

        <!-- Additional buttons -->
        <div class="nav_right flex">
            <!-- Search -->
            <div role="button" tabindex="0" id="search_button" class="nav_item nav_button">
                <img src="/assets/icon/search_FILL0_wght600_GRAD0_opsz24.svg" alt="Search" class="icon button_icon" style="transform: scale(1.3, 1.3) translateY(1px);">
            </div>
            <!-- Github -->
            <a href="https://github.com/not-the" rel="noreferrer" title="Github">
                <div class="nav_item nav_button">
                    <img src="/assets/icon/github.svg" alt="Github" class="icon button_icon">
                </div>
            </a>
            <!-- Settings -->
            <div role="button" tabindex="0" id="options_button" class="nav_item nav_button">
                <img src="/assets/icon/settings.svg" alt="Options" class="icon button_icon">
            </div>
        </div>
    </div>


    <!-- Search -->
    <div id="search_wrapper" class="" aria-hidden="true">
        <div class="search_glow" />
        <div class="inner">
            <label for="palette_search" id="search_box">
                <svg class="palette_symbol" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M375.478-306.999q-114.087 0-193.544-79.457Q102.477-465.913 102.477-580q0-114.087 79.457-193.544 79.457-79.457 193.544-79.457 114.087 0 193.544 79.457Q648.479-694.087 648.479-580q0 45.13-12.87 83.283-12.869 38.152-34.608 67.021l219.478 220.044q14.956 15.522 14.956 37.326 0 21.805-15.522 36.761-14.956 14.957-37.043 14.957-22.088 0-37.044-14.957L526.913-354.477q-29.435 21.739-68.152 34.608-38.718 12.87-83.283 12.87Zm0-106.002q69.913 0 118.456-48.543Q542.477-510.087 542.477-580q0-69.913-48.543-118.456-48.543-48.543-118.456-48.543-69.913 0-118.456 48.543Q208.479-649.913 208.479-580q0 69.913 48.543 118.456 48.543 48.543 118.456 48.543Z"/></svg>
                <input type="text" name="palette_search" id="palette_search" placeholder="Type to search" autocomplete="off" enterkeyhint="go">
            </label>
        </div>
        <div class="palette_results"></div>
    </div>

</nav>
