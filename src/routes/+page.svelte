<!-- JS -->
<script>
    // Components
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
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

    <!-- JS -->
    <script src="/index.js" defer></script>

    <!-- not-util -->
    <link rel="stylesheet" href="https://code.notkal.com/not-util.css" crossorigin>
    <script src="https://code.notkal.com/not-util.js" crossorigin></script>

    <!-- Animate on Scroll -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <!-- Home Page JS -->
    <script src="https://unpkg.com/aos@next/dist/aos.js" defer></script>
    <script src="/obfuscate.js" defer></script>
    <script defer>
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
    </script>
    <script defer>
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
    </script>

</svelte:head>

<!-- HTML -->
<!---------- Navigation ---------->
<Navbar />

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

<!---------- Skills ---------->
<div style="overflow-x: hidden;" id="skills_mouse_area">
    <div id="portfolio"></div>
    <section id="skills" class="container screen_height flex">
        <div>
            <h2>Skills & Experience</h2>
    
            <!-- List -->
            <div id="skills_list">
                <!-- HTML -->
                <div class="skill mouse_glow" id="skill_html" data-aos="fade-right" data-aos-delay="0" data-aos-duration="1500">
                    <div class="skill_content">
                        <img src="/assets/image/html.png" alt="HTML5">
                        <div>
                            <h4>HTML5</h4>
                        </div>
                    </div>
                </div>
                <!-- CSS -->
                <div class="skill mouse_glow" id="skill_css" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1100">
                    <div class="skill_content">
                        <img src="/assets/image/css.png" alt="CSS3">
                        <div>
                            <h4>CSS</h4>
                            <!-- <p>Experience creating visually pleasing & responsive websites</p> -->
                        </div>
                    </div>
                </div>
                <!-- JS -->
                <div class="skill mouse_glow" id="skill_js" data-aos="fade-right" data-aos-delay="110" data-aos-duration="650">
                    <div class="skill_content">
                        <img src="/assets/image/js.png" alt="JS">
                        <div>
                            <h4>Javascript</h4>
                            <p>Experience with both frontend and backend Javascript</p>
                        </div>
                    </div>
                </div>
                <!-- NodeJS -->
                <div class="skill mouse_glow" id="skill_node" data-aos="fade-left"data-aos-delay="150" data-aos-duration="900">
                    <div class="skill_content">
                        <img src="/assets/image/nodejs.png" alt="NodeJS">
                        <div>
                            <h4>NodeJS</h4>
                            <p>Experience creating web servers using NodeJS</p>
                        </div>
                    </div>
                </div>
                <!-- Cloud Platforms -->
                <div class="skill mouse_glow" id="skill_cloud" data-aos="fade-right">
                    <div class="skill_content">
                    <img src="/assets/icon/cloud.svg" alt="Cloud" class="icon" data-aos-delay="160" data-aos-duration="1200">
                        <div>
                            <h4>Cloud Platforms</h4>
                            <p>Experience with Amazon Web Services, Google Cloud Platform, Netlify, Heroku, & Cloudflare</p>
                        </div>
                    </div>
                </div>
                <!-- Image Editing -->
                <div class="skill mouse_glow" id="skill_photoshop" data-aos="fade-left" data-aos-delay="170" data-aos-duration="1350">
                    <div class="skill_content">
                        <img src="/assets/image/photoshop.png" alt="Photoshop">
                        <div>
                            <h4>Image Manipulation</h4>
                            <p>Proficient in GIMP, Photoshop and MS Paint</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="visual_layer">
                <div class="circle"></div>
                <div class="triangle"></div>
            </div>
        </div>
    </section>
</div>


<!-- Past Work -->
<!-- <div id="work" class="container doc">
    <h2>Past Work</h2>
</div> -->


<!---------- Projects ---------->
<section id="projects" class="container">
    <!-- Title -->
    <h2>Projects</h2>
    
    <!-- List -->
    <div id="projects_list">

        <div class="project" id="sand-toy" style="background: var(--project-gradient), url(/assets/project/sandtoy\ scene.png) center 80% !important">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://not-the.github.io/sand-toy" class="project_link"></a>
                        <h3>Sand Toy</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/sand-toy" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="mario-pixijs" style="background: var(--project-gradient), url(/assets/project/piximario.png) center 80% !important">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://mario.notkal.com/" class="project_link"></a>
                        <h3>PIXI.JS Mario</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/mario-pixijs" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="character-creator" style="background: var(--project-gradient), url(/assets/project/character_creator_2.png)">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://notkal.com/Character-Creator" class="project_link"></a>
                        <h3>Character Creator</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/character-creator" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="carrot-clicker" style="background: var(--project-gradient), url(/assets/project/carrot_clicker_big.png)">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://carrot.notkal.com" class="project_link"></a>
                        <h3>Carrot Clicker</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/carrot-clicker" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="puzzle-cube" style="background: var(--project-gradient), url(/assets/project/rubiks2.png) right !important">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://rubiks.notkal.com/" class="project_link"></a>
                        <h3>Rubik's Cube</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/puzzle-cube" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="gravity-toy">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://not-the.github.io/gravity-toy" class="project_link"></a>
                        <h3>Gravity Toy</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/gravity-toy" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="maze-algorithm" style="background: var(--project-gradient), url(/assets/project/maze.png)">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://notkal.com/Maze-Algorithm" class="project_link"></a>
                        <h3>Maze Algorithm</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/maze-algorithm" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="pong" style="background: var(--project-gradient), url(/assets/project/pong.png)">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://notkal.com/Pong" class="project_link"></a>
                        <h3>Pong</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/pong" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="tictactoe" style="background: var(--project-gradient), url(/assets/project/ttt.png)">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://tictactoe.notkal.com" class="project_link"></a>
                        <h3>Tic Tac Toe</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/tictactoe" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div><details><summary>Older projects</summary>
        <div class="project" id="Mouse-Confetti" style="background: var(--project-gradient), url(/assets/project/confetti.png)">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://notkal.com/Mouse-Confetti" class="project_link"></a>
                        <h3>HTML Confetti</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/Mouse-Confetti" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="loading-screens">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://not-the.github.io/Loading-Screens" class="project_link"></a>
                        <h3>CSS Loading Screens</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/loading-screens" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="iss-tracker-app">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://notkal.com/iss-tracker-app/" class="project_link"></a>
                        <h3>ISS Tracker</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/iss-tracker-app" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="geolocation-html">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://not-the.github.io/geolocation-html" class="project_link"></a>
                        <h3>Geolocation</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/geolocation-html" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="js-pyramid">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://not-the.github.io/js-pyramid" class="project_link"></a>
                        <h3>JS Pyramid</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/js-pyramid" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div>

        <div class="project" id="leap-years-list">
            <div class="inner flex">
                <div class="flex">
                    <div>
                        <a href="https://not-the.github.io/LeapYear" class="project_link"></a>
                        <h3>Leap years list</h3>
                        
                    </div>
                </div>
                <div class="title_buttons flex">
                    <a href="https://github.com/not-the/leap-years-list" class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            </div>
        </div></details></div>

</section>

<!---------- Contact ---------->
<section id="contact" class="container">
    <!-- Title -->
    <h2>Contact</h2>

    <div id="contact_list">
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
        <div class="contact_item flex" id="email">
            <img src="/assets/icon/mail_24dp_FILL1_wght600_GRAD0_opsz20.svg" alt="" class="icon white_icon">
            <div>
                <strong>Email</strong>
                <a role="button" tabindex="0" data-obfuscated>
                    Click to reveal
                </a>
            </div>
        </div>

        <div class="contact_item flex">
            <img src="/assets/icon/github.svg" alt="" class="icon">
            <div>
                <strong>Github</strong>
                <a href="https://github.com/not-the" rel="noreferrer">https://github.com/not-the</a>
            </div>
        </div>
    </div>

</section>

<!---------- Footer ---------->
<Footer />
