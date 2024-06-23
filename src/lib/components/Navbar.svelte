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
            <a href="/" class="nav_item">Home</a>
            <!-- <a href="/#portfolio" class="nav_item" onclick="toggleMenu()">Portfolio</a> -->
            <a href="/#projects" class="nav_item" onclick="toggleMenu()">Projects</a>
            <!-- <a href="/#contact" class="nav_item" onclick="toggleMenu()">Contact</a> -->
            <a href="/posts/" class="nav_item">Blog</a>
            <a href="/about/" class="nav_item">About</a>
        </div>

        <!-- Additional buttons -->
        <div class="nav_item nav_right flex">
            <div role="button" tabindex="0" id="search_button" class="nav_button">
                <img src="/assets/icon/search_FILL0_wght600_GRAD0_opsz24.svg" alt="Search" id="search_button" class="icon button_icon" style="transform: scale(1.3, 1.3) translateY(1px);">
            </div>
            <a href="https://github.com/not-the" rel="noreferrer" title="Github">
                <div class="nav_button">
                    <img src="/assets/icon/github.svg" alt="Github" class="icon button_icon">
                </div>
            </a>
            <div role="button" tabindex="0" id="options_button" class="nav_button">
                <img src="/assets/icon/settings.svg" alt="Options" class="icon button_icon">
            </div>
        </div>
    </div>
</nav>