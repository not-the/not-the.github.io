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
            href: "/projects/"
            //, onclick: "toggleMenu()"
        },
        {
            name: "Blog",
            href: "/posts/"
        },
        {
            name: "About",
            href: "/about/"
        }
    ];

    /** Returns a boolean depending on if the current page matches a given nav button */
    function isActiveNav(href="") {
        if(href === activeTab) return true;
    }
</script>

<!-- Navbar -->
<nav id="nav" class="overlay_element flex nav_transparent">
    <!-- Menu button -->
    <div role="button" tabindex="0" id="menu_button" class="nav_button">
        <img src="/assets/icon/hamburger.svg" alt="Menu" id="menu_button_icon" class="icon button_icon">
    </div>

    <!-- Page name -->
    <p class="nav_item page_title">notkal</p>

    <div class="flex" id="hamburger_menu">
        <!-- Nav items -->
        <div id="nav_list" class="flex">
            {#each navList as { name, href, onclick }}
                <a class="nav_item" {href} {onclick} data-active={isActiveNav(name)} >{name}</a>
            {/each}
        </div>

        <!-- Additional buttons -->
        <div class="nav_item nav_right flex">
            <!-- Search -->
            <div role="button" tabindex="0" id="search_button" class="nav_button">
                <img src="/assets/icon/search_FILL0_wght600_GRAD0_opsz24.svg" alt="Search" id="search_button" class="icon button_icon" style="transform: scale(1.3, 1.3) translateY(1px);">
            </div>
            <!-- Github -->
            <a href="https://github.com/not-the" rel="noreferrer" title="Github">
                <div class="nav_button">
                    <img src="/assets/icon/github.svg" alt="Github" class="icon button_icon">
                </div>
            </a>
            <!-- Settings -->
            <div role="button" tabindex="0" id="options_button" class="nav_button">
                <img src="/assets/icon/settings.svg" alt="Options" class="icon button_icon">
            </div>
        </div>
    </div>

    <!-- Selector -->
    <!-- <div class="nav_selector"/> -->
</nav>
