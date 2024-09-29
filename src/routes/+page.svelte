<!-- JS -->
<script>
    import { onMount } from 'svelte'

    // Components
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import AllProjects from '$lib/components/AllProjects.svelte'

    // import Project from '$lib/components/Project.svelte'

    // Data
    // import data from "$lib/data/data.json"


    onMount(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 800, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
        });

        // Mouse highlight
        // Inspired by https://codepen.io/Hyperplexed/pen/MWQeYLW
        document.getElementById("skills_mouse_area").onmousemove = event => {
            requestAnimationFrame(() => {
                for(element of document.getElementsByClassName("mouse_glow")) {
                    let rect = element.getBoundingClientRect();
                    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
                    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
                };
            });
        }
    });
</script>


<!-- HEAD -->
<svelte:head>
    <!-- Styles -->
    <link rel="stylesheet" href="/css/home.css">
    <meta name="theme-color" content="#171718"/>

    <!-- Info -->
    <title>notkal</title>

    <!-- Meta -->
    <meta name="description" content="I make websites">
    <meta property="og:url" content="https://notkal.com/">
    <meta property="og:title" content="notkal">
    <!-- <meta property="og:image" content=""> -->
    <!-- <meta name="twitter:image:alt" content="Alt text for image"> -->
    <!-- <meta name="twitter:card" content="summary_large_image"> -->

    <!-- Animate on Scroll -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <!-- Home Page JS -->
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script src="/js/obfuscate.js" defer></script>

</svelte:head>

<!-- HTML -->
<!---------- Navigation ---------->
<Navbar activeTab={"Home"} />

<!---------- Main ---------->
<main id="home" class="screen_height">
    <video src="/assets/video/abstract_ds.mp4" id="banner" class="banner video_main" autoplay loop muted webkit-playsinline playsinline></video>
    <div id="home_center">
        <!-- Hello -->
        <div class="home_block home_hello">
            <h1 class="big_title">
                I make<br/>
                <span class="big_title_accent">Websites</span>
            </h1><br/>
            <a href="#projects" class="bold" style="font-family: var(--title-font)">Projects -></a> 
        </div>

        <!-- More -->
        <div class="home_block home_more">
            <p class="center">Available for <b class="emphasize">freelance work</b></p>
            <br/>
            <a href="#email">
                <div class="button full_width bold button_blue" id="call_to_action">
                    <p>Email me</p>
                    <div class="button_shade"></div>
                </div>
            </a>
        </div>
    </div>

    <!-- noscript -->
    <noscript id="noscript" class="flex">
        <img src="/assets/image/js.png" alt="" height="60" width="60" style="margin-right: 18px;">
        <div>
            This website will load without javascript enabled, but some features will not work as expected.
        </div>

        <!-- CSS -->
        <style type="text/css">
            #reduce_motion,
            #search_button {
                filter: brightness(50%);
                cursor: unset;
            }
            #theme_button:hover .button_icon { transform: none; }
            #noscript {
                position: absolute;
                left: 24px;
                bottom: 36px;

                width: 400px;
                max-width: 100%;
                padding: 12px 18px;
                border-radius: 12px;

                background-color: var(--text);
                color: var(--main-bg);
            }

            /* AOS */
            [data-aos^=fade][data-aos^=fade] {
                opacity: unset !important;
                transform: none !important;
            }
        </style>
    </noscript>

    <!-- <div class="options" id="reduce_motion">
        <div class="item">
            <img src="/assets/icon/motion_mode_FILL0_wght600_GRAD0_opsz20.svg" class="icon">
            <p>Reduce motion</p>
            <label class="switch">
                <input type="checkbox" data-option="reduce_motion">
                <span></span>
                <div class="on">I</div>
                <div class="off">O</div>
            </label>
        </div>
    </div> -->

    <!-- Wave SVG -->
    <!-- <div class="wave_decoration white_icon"></div> -->
</main>


<!---------- Projects ---------->
<br/>
<br/>
<section id="projects" class="container">
    <!-- Title -->
    <h2>Projects</h2>
    
    <!-- List -->
    <AllProjects />

</section>

<!---------- Contact ---------->
<section id="contact" class="container">
    <!-- Title -->
    <h2>Contact</h2>

    <div id="contact_list" class="media_flex">
        <!-- Left col -->
        <div class="contact_item" id="form">
            <div class="full_width" style="padding: 6px;">
                <strong style="display: inline-block; padding-bottom: 12px; padding-left: 6px;">Send me a message:</strong>
                <form action="https://formsubmit.co/ab074334a2691755cc5fc1c4e5d11589" method="POST">
                    <input type="hidden" name="_next" value="https://notkal.com/#t=Message%20Sent">
                    <input type="hidden" name="_template" value="table">

                    <div class="flex">
                        <!-- <input type="text" name="name" placeholder="Name" required value="GAMER"/> -->
                        <input type="email" name="email" placeholder="Your email" required/>
                        <input type="subject" name="subject" placeholder="Subject (optional)"/>
                    </div>

                    <textarea placeholder="Your Message" name="message" rows="6" required></textarea>

                    <br/><br/>
                    <button type="submit" class="button button_blue bold full_width">
                        <p>Send</p>
                        <div class="button_shade"></div>
                    </button>
                    <!-- <p class="secondary_text center" style="margin-top: 6px;"><sup>Do not send any personal info</sup></p> -->
                    <br/>
                </form>
            </div>
        </div>

        <!-- Right col -->
        <div class="right_col">
            <div class="contact_item" id="email">
                <img src="/assets/icon/mail_24dp_FILL1_wght600_GRAD0_opsz20.svg" alt="" class="icon white_icon">
                <div>
                    <strong>Email</strong>
                    <a href="javascript:;" role="button" tabindex="0" data-obfuscated>
                        Click to reveal
                    </a>
                </div>
            </div>
    
            <div class="contact_item">
                <img src="/assets/icon/github.svg" alt="" class="icon">
                <div>
                    <strong>Github</strong>
                    <a href="https://github.com/not-the" rel="noreferrer">https://github.com/not-the</a>
                </div>
            </div>

        </div>
    </div>

</section>

<!---------- Footer ---------->
<Footer />
