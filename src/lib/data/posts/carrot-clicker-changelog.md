---
title: Carrot Clicker Changelog
description: Update history for Carrot Clicker
author: not-the
banner: url('/assets/banner/gradient_2.png')

buttons: [{"name":"Older changes","href":"https://carrot.notkal.com/changelog.txt","external":true}]

created: 6/17/2023
modified: 7/5/2023

id: carrot-clicker-changelog
tags: gamedev, changelog

contents: [{"name":"Dev beta 1.17.5","id":"dev-beta-1_17_5"},{"name":"Dev beta 1.17.4","id":"dev-beta-1_17_4"},{"name":"Dev beta 1.17.2 Revision 2","id":"dev-beta-1_17_2-revision-2"},{"name":"Dev beta 1.17.2 Revision 1","id":"dev-beta-1_17_2-revision-1"},{"name":"Dev beta 1.17.3","id":"dev-beta-1_17_3"},{"name":"Stable Repository","id":"stable-repository"},{"name":"Dev beta 1.17.2","id":"dev-beta-1_17_2"},{"name":"Dev beta 1.17.1","id":"dev-beta-1_17_1"},{"name":"Dev beta 1.17","id":"dev-beta-1_17"},{"name":"Dev beta 1.16.16","id":"dev-beta-1_16_16"},{"name":"Dev beta 1.16.15.1","id":"dev-beta-1_16_15_1"},{"name":"Dev beta 1.16.15","id":"dev-beta-1_16_15"},{"name":"Dev beta 1.16.14","id":"dev-beta-1_16_14"},{"name":"Dev beta 1.16.13","id":"dev-beta-1_16_13"},{"name":"Dev beta 1.16.12","id":"dev-beta-1_16_12"},{"name":"Dev beta 1.16.11","id":"dev-beta-1_16_11"},{"name":"Dev beta 1.16.10","id":"dev-beta-1_16_10"},{"name":"Dev beta 1.16.9.1","id":"dev-beta-1_16_9_1"},{"name":"Dev beta 1.16.9","id":"dev-beta-1_16_9"},{"name":"Dev beta 1.16.8","id":"dev-beta-1_16_8"}]
---

<p>Update history for <a href="https://carrot.notkal.com/">Carrot Clicker</a></p>

<article id="dev-beta-1_17_5">
    <h2>Dev beta 1.17.5 <a href="#dev-beta-1_17_5"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 12/15/2023</i></p>
    <h6>New</h6>
    <ul>
        <li>New cosmetic:
            <ul>
                <li>Gold Suit Bill (Millenial Bill achievement adds it to Carl's shop)</li>
            </ul>
        </li>
        <li>New achievement for crafting the dual sickle</li>
        <li>Gave some achievements artwork:
            <ul>
                <li>bill_lvl_10</li>
                <li>bill_lvl_100</li>
                <li>bill_lvl_500</li>
                <li>bill_lvl_1000</li>
                <li>800_falling_carrots</li>
                <li>all_cosmetics</li>
            </ul>
        </li>
    </ul>
    <h6>Balance Changes</h6>
    <ul>
        <li>Changed achievement unlock conditions:
            <ul>
                <li>"Carrot Rain" 250 -&gt; 800 fallen carrots</li>
                <li>"Falling Into Place" 2048 -&gt; 4096 fallen carrots</li>
            </ul>
        </li>
    </ul>
    <h6>Bug Fixes</h6>
    <ul>
        <li>Fixed themes and some cosmetics not appearing in Carl's shop</li>
        <li>Fixed "Time played" statistic missing hours</li>
        <li>Bumped data_version to 18</li>
    </ul>
</article>

<article id="dev-beta-1_17_4">
    <h2>Dev beta 1.17.4 <a href="#dev-beta-1_17_4"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 11/25/2023</i></p>
    <p>
        Reverted 1.17.3 changes and moved them to the charles experiment branch<br>
        Features from 1.17.2 revisions 1 and 2 have been merged
    </p>
    <h6>New</h6>
    <ul>
        <li>Added "Time played" statistic. It will pause when the window is unfocused (even if still running)</li>
        <li>Added copyright symbol to credits+footer</li>
        <li>Added a game updated toast when the data_version is bumped</li>
        <li>Bumped data_version version to 17</li>
    </ul>
    <h6>Balance Changes</h6>
    <ul>
        <li>Changed "50_percent_achievements" achievement to require 50 achievements instead of a percentage.
            Renamed: "Half Way There" -&gt; "Bronze Medal"</li>
        <li>Made the Tool Box trinket cheaper. Starting price: 76 -&gt; 46</li>
        <li>The Classic-er theme is now made available after the Bronze Medal achievement is unlocked (instead of "all
            achievements")</li>
        <li>Made the "Milennial Bill" achievement no longer hidden</li>
    </ul>
    <h6>Bug Fixes</h6>
    <ul>
        <li>Fixed boosts directly effecting prestige potential</li>
        <li>Fixed the page not updating when buying tomes from Charles</li>
        <li>Fixed Charles' menu not auto-opening after prestiging</li>
        <li>Fixed Charles' icons not appearing in the classic theme</li>
        <li>Fixed progress bars being janky (<a href="https://github.com/not-the/Carrot-Clicker/issues/19">Issue #19</a>)</li>
    </ul>
</article>

<article id="dev-beta-1_17_2-revision-2">
    <h2>Dev beta 1.17.2 Revision 2<a href="#dev-beta-1_17_2-revision-2"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 11/16/2023</i></p>
    <p>
        This is an update for the stable branch only. Changes will be merged when the development version isn't unstable.
    </p>
    <ul>
        <li>Fixed incorrect/placeholder tool names in statistics (<a href="https://github.com/not-the/Carrot-Clicker/issues/74">Issue #74</a>)</li>
        <li>Added adsense advertisements. Clicking the X button -&gt; report -&gt; ad covered content will hide them.</li>
    </ul>
</article>

<article id="dev-beta-1_17_2-revision-1">
    <h2>Dev beta 1.17.2 Revision 1 <a href="#dev-beta-1_17_2-revision-1"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 11/12/2023</i></p>
    <p>
        This is an update for the stable branch only. Changes will be merged when the development version isn't unstable.
    </p>
    <ul>
        <li>Fixed characterInfo not working (<a href="https://github.com/not-the/Carrot-Clicker/issues/75">Issue #75</a>)</li>
        <li>Fixed tool names in the keybinds menu:
            <ul>
                <li>Sturdy hoe -&gt; Sturdy Hoe</li>
                <li>placeholder -&gt; Dual Sickle</li>
            </ul>
        </li>
        <li>Updated the cookie notice with some extra text and a link to the privacy policy</li>
        <li>Added a privacy policy link to the dropdown and the footer</li>
        <li>Added share icon attribution to credits</li>
        <li>Commented out (doesn't work on iOS): Added share button to main_buttons</li>
    </ul>
</article>

<article id="dev-beta-1_17_3">
    <h2>Dev beta 1.17.3 <a href="#dev-beta-1_17_3"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>JJCVIP | 9/23/2023</i></p>
    <ul>
        <li>
            Added/renamed Charles' tomes, they are now:
            <ul>
                <li>ImprovedFarmingPractices</li>
                <li>improveCraftsmanship</li>
                <li>CheaperSteel</li>
                <li>SalaryManagement</li>
                <li>Bible</li>
            </ul>
        </li>
        <li>Cleaned up, moved to a character method and implemented tome modifiers to CalculateCarrots()</li>
        <li>Added version tags to most classes</li>
    </ul>
</article>

<article id="stable-repository">
    <h2>Stable Repository <a href="#stable-repository"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 6/14/2023</i></p>
    Made a copy of the repository to be hosted on the website. Changes don't apply to main repo.
    <ul>
        <li>Removed all comments and condensed code</li>
        <li>Removed all console.log and console.warn lines</li>
        <li>Removed code for inventory and hardmode</li>
    </ul>
</article>

<article id="dev-beta-1_17_2">
    <h2>Dev beta 1.17.2 <a href="#dev-beta-1_17_2"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 6/14/2023</i></p>
    <ul>
        <li>Fixed Greg's tool prices being higher than intended (<a href="https://github.com/not-the/Carrot-Clicker/issues/72">Issue #72</a>)</li>
        <li>Condensed and improved some code</li>
        <li>Disabled the automatic granting of the "playtest" flag and enabled the achievement for it</li>
        <li>Made the statistics menu a bit more readable</li>
        <li>Achievements:
            <ul>
                <li>Added "Confetti Mode" artwork</li>
            </ul>
        </li>
    </ul>
</article>

<article id="dev-beta-1_17_1">
    <h2>Dev beta 1.17.1 <a href="#dev-beta-1_17_1"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 1/16/2023</i></p>
    <ul>
        <li>Fixed a typo that made the prestiging tutorial toast throw an error (and break "Unlock all" in devtools)</li>
        <li>Cosmetics:
            <ul>
                <li>Updated "Baker Bill" artwork</li>
                <li>Updated "Business Bill" artwork</li>
                <li>Updated "Ugly Sweater Bill" artwork</li>
                <li>Updated "Grandma Belle" artwork</li>
                <li>Updated "High Vis Greg" artwork</li>
                <li>Fixed "Alien Carrot" cosmetic not loading</li>
            </ul>
        </li>
        <figure>
            <div class="gallery pixel_gallery">
                <img src="/posts/carrot-clicker-changelog/assets/1.17.1/baker_bill.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17.1/business_bill.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17.1/bill_ugly_sweater.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17.1/grandma_belle.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17.1/safety_greg.png" alt="" loading="lazy" tabindex="0">
            </div>
            <figcaption>Click to enlarge</figcaption>
        </figure>
    </ul>
</article>

<article id="dev-beta-1_17">
    <h2>Dev beta 1.17 <a href="#dev-beta-1_17"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 11/15/2022</i></p>
    <ul>
        <li>Falling boosts now produce confetti and a text popup with the name of the boost when collected</li>
        <li>Falling boost drop chance changed 2% -&gt; 3% (keep in mind this is if the 1% falling carrot chance has already succeeded, so 3% is actually a 0.03% every time you click)</li>
        <li>Cancel boost buttons are now keyboard focusable</li>
        <li>A boosts multiplier now appears alongside its timer</li>
        <li>"Boosts used" statistic now appears in the statistics menu</li>
        <li>Added a tutorial message for when the prestiging becomes available</li>
        <li>Tool prices now visually change depending on if the tool is unlocked or if you can afford it</li>
        <li>Removed the hover title from achievement icons</li>
        <li>Fixed the "Orange Arrow" cosmetic not being obtainable via the achievement</li>
        <li>Achievements:
            <ul>
                <li>Added "Not So Useless" artwork</li>
                <li>Added "Complete Collection" artwork</li>
                <li>Added "Extreme Farming" artwork</li>
                <li>Added "Carrot Continent" artwork</li>
                <li>Updated "Two's Company" artwork</li>
                <li>Updated "Heavy Metal" artwork</li>
                <li>Updated "Boomer Bill Gates" artwork</li>
            </ul>
        </li>
        <li>Cosmetics:
            <ul>
                <li>Updated "Biker Bill" artwork</li>
                <li>Updated "Fancy Bill" artwork</li>
                <li>Updated "Dollar Bill" artwork</li>
            </ul>
        </li>
        <figure>
            <div class="gallery pixel_gallery">
                <img src="/posts/carrot-clicker-changelog/assets/1.17/Not So Useless.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17/Complete Collection.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17/Extreme Farming.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17/Carrot Continent.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17/Two's Company.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17/Heavy Metal new.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17/Fancy Bill NEW.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17/Biker Bill NEW.png" alt="" loading="lazy" tabindex="0">
                <img src="/posts/carrot-clicker-changelog/assets/1.17/Dollar Bill NEW.png" alt="" loading="lazy" tabindex="0">
            </div>
            <figcaption>Click to enlarge</figcaption>
        </figure>
        <b>Trinkets</b>
        <li>Propane tank is now slightly cheaper, level 1 multipler changed from 1.2x -&gt; 1.25x</li>
        <li>Tool box is now cheaper overall</li>
        <b>Bug fixes</b>
        <li>Fixed the golden carrot bonus % shown in the prestige menu being incorrect</li>
        <li>Fixed carrot count not updating when Jared is hired</li>
        <li>Fixed Jared hire button and error message price being incorrect</li>
        <li>Fixed tooltips appearing underneath other elements when activated via focus-visible</li>
        <li>Fixed only one boost type being given by falling boosts</li>
        <li>The "Buy tomes" button creates a toast when Charles isn't unlocked</li>
        <b>Internal changes</b>
        <li>Dev panel now appears on the right side of settings</li>
        <li>Condensed the characterButtons() function</li>
    </ul>
</article>

<article id="dev-beta-1_16_16">
    <h2>Dev beta 1.16.16 <a href="#dev-beta-1_16_16"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 11/14/2022</i></p>
    <ul>
        <b>Jared changes</b>
        <li>Lifetime carrots required for him to appear: 50m -&gt; 5m</li>
        <li>Hire cost: 250m -&gt; 10m</li>
        <li>No longer requires you to have prestiged to appear</li>
        <br><p>Hopefully these changes will make the early game more interesting since you're accumulating cash from the start</p>
        <b>Other</b>
        <li>Added new statistics: Boosts Used (lifetime and prestige) - won't appear in statistics yet</li>
        <li>Fixed theme_grey not changing settings</li>
    </ul>
</article>

<article id="dev-beta-1_16_15_1">
    <h2>Dev beta 1.16.15.1 <a href="#dev-beta-1_16_15_1"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 11/11/2022</i></p>

    <ul>
        <li>Fixed placeholder text on tool 5 and tool 6 cosmetic</li>
    </ul>
</article>

<article id="dev-beta-1_16_15">
    <h2>Dev beta 1.16.15 <a href="#dev-beta-1_16_15"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 11/9/2022</i></p>
    <ul>
        <li>Added an extremely small chance for a boost to drop when clicking the carrot</li>
        <li>Gilded hoe is now the final tool</li>
        <li>All tools now have sprites</li>
        <li>Condensed the characterPrices() function</li>
        <li>Fixed theme/cosmetic NEW indicators not going away</li>
        <li>Removed the version from the page title</li>
        <li>Achievements:
            <ul>
                <li>no_bill_challenge name changed and given artwork</li>
                <li>all_themes given artwork</li>
                <li>New achievement: all_cosmetics</li>
            </ul>
        </li>
    </ul>
</article>

<article id="dev-beta-1_16_14">
    <h2>Dev beta 1.16.14 <a href="#dev-beta-1_16_14"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>JJCVIP | 11/7/2022</i></p>
    <ul>
        <li>Fixed <a href="https://github.com/not-the/Carrot-Clicker/issues/71">issue #71</a>; Crafting now slows in the final three frames to limit weird carrot count changes</li>
        <li>Fixed level up price inconsistency by making the function generate an array and using those values to give a price</li>
        <li>Fixed touch inputs not working (<a href="https://github.com/not-the/Carrot-Clicker/issues/70">Issue #70</a>)</li>
        <li>Removed the unused changelog page</li>
        <li>Fixed the main_icon being off to the left on mobile</li>
        <li>Fixed character buttons' highlighting not updating when a tool is crafted</li>
        <li>Reworked the way the Propane Tank trinket works
            <ul>
                <li>Prices are overall cheaper</li>
                <li>Maximum speed is x10</li>
                <li>Value is now used in the craft interval instead of as a carrot multiplier</li>
            </ul>
        </li>
    </ul>
</article>

<article id="dev-beta-1_16_13">
    <h2>Dev beta 1.16.13 <a href="#dev-beta-1_16_13"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 10/31/2022</i></p>
    <ul>
        <li>Pressing escape on the main page now opens the dropdown</li>
        <li>Made the mobile nav bar larger</li>
        <li>Replaced tools' placeholder text in statistics, keybinds and achievements</li>
        <li>Toggling settings no longer generates a toast by default</li>
        <li>A, S and D hotkeys no longer work when a menu is open</li>
        <li>Rewrote the newIndicator() function and fixed an issue where the cosmetics tab would appear unlocked if any cosmetic was unlocked without Carl</li>
        <li>Fixed "Confetti Mode" achievement incorrectly referring to itself as party mode</li>
        <li>Fixed the keybinds menu incorrectly stating that keybinds are disabled</li>
        <li>Fixed tool equip keybinds not working</li>
    </ul>
</article>

<article id="dev-beta-1_16_12">
    <h2>Dev beta 1.16.12 <a href="#dev-beta-1_16_12"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 9/11/2022</i></p>
    <ul>
        <li>Settings menu overhaul</li>
        <li>When a dialog opens the accept button will automatically be focused</li>
        <li>Keyboard focused buttons will now look the same as hovered buttons</li>
    </ul>
</article>

<article id="dev-beta-1_16_11">
    <h2>Dev beta 1.16.11 <a href="#dev-beta-1_16_11"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 9/9/2022</i></p>
    <ul>
        <li>Added a navigation bar that appears by default on mobile</li>
        <li>Updated the favicon</li>
        <li>Classic theme now has the old mini info style</li>
        <li>Falling carrots now have multitouch support</li>
        <li>Moved "All Bill" cosmetic back to the bill_lvl_100 achievement (was bill_lvl_500)</li>
        <li>New achievement: IOU - Have fewer than 1000 carrots while Greg is crafting</li>
        <li>Fixed crafting not updating the carrot count</li>
        <li>Fixed tool highlighting not updating when earnCarrots runs (<a href="https://github.com/not-the/Carrot-Clicker/issues/69">Issue #69</a>)</li>
        <li>Toggling full numbers will now update some major numbers instantly</li>
        <li>Hopefully fixed an issue where extreme crafting speeds could drain your carrots instead of stopping at the price of the tool</li>
        <li>Different tools now have different crafting speeds</li>
        <li>Footer links now open in a new tab</li>
        <br>
        <b>Balance changes:</b>
        <li>
            Tool crafting speeds
            <table>
                <tbody><tr>
                    <th>Tool</th>
                    <th>Old</th>
                    <th>New value</th>
                </tr>
                <tr>
                    <td>Hoe</td>
                    <td>0.01</td>
                    <td>0.06</td>
                </tr>
                <tr>
                    <td>Sturdy Hoe</td>
                    <td>0.01</td>
                    <td>0.03</td>
                </tr>
                <tr>
                    <td>Scythe</td>
                    <td>0.01</td>
                    <td>0.01 (Unchanged)</td>
                </tr>
                <tr>
                    <td>Plough</td>
                    <td>0.01</td>
                    <td>0.009</td>
                </tr>
                <tr>
                    <td>Gilded Hoe</td>
                    <td>0.01</td>
                    <td>0.007</td>
                </tr>
                <tr>
                    <td>Tool 6</td>
                    <td>0.01</td>
                    <td>0.005</td>
                </tr>
            </tbody></table>        
        </li>
    </ul>
</article>

<article id="dev-beta-1_16_10">
    <h2>Dev beta 1.16.10 <a href="#dev-beta-1_16_10"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 9/7/2022</i></p>
    <ul>
        <li>
            New new tool sprites
            <ul>
                <li>No tool 6 yet though</li>
            </ul>
            <figure>
                <img src="/posts/carrot-clicker-changelog/assets/new_tools_solid_bg.png" alt="New tool sprites" tabindex="0">
                <figcaption>Left to right: Hoe, Sturdy Hoe, Scythe, Plough, Gilded Hoe</figcaption>
            </figure>
        </li>
        <li>Tool tooltips</li>
    </ul>
</article>

<article id="dev-beta-1_16_9_1">
    <h2>Dev beta 1.16.9.1 <a href="#dev-beta-1_16_9_1"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 9/5/2022</i></p>
    <ul>
        <li>Fixed a crash</li>
        <li>Dev panel: "Auto-update save while in debug mode" option now functions as expected</li>
        <li>The footer is now visible at all times instead of just in settings</li>
    </ul>
</article>

<article id="dev-beta-1_16_9">
    <h2>Dev beta 1.16.9 <a href="#dev-beta-1_16_9"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 9/5/2022</i></p>
    <b>Touchscreen support</b><br>
    <ul>
        <li>Reenabled farmable cosmetics being able to change the name of the item you're farming, and condensed the setCosmetic function</li>
        <li>Fixed character levels being the wrong color in safari</li>
        <li>Tool numbers now change color instead of display as "MAX" when full</li>
        <li>Fixed a bug where buying a trinket would prevent it from greying out once it became too expensive</li>
        <li>Replaced main button item's titles with tooltips</li>
        <li>Slightly reworked the prestige menu
            <ul>
                <li>Prestige menu now shows you the exact prestige bonus you recieve from tomes</li>
                <li>Added a "Buy tomes" button that opens Charles</li>
            </ul>
        </li>
        <li>Renamed function: onClick -&gt; carrotClicker</li>
        <li>Clicking the carrot now supports:
            <ul>
                <li>Multi touch</li>
                <li>Number popup now follows your finger</li>
            </ul>
        </li>
        <li>- Misc changes to improve SEO/appropriate use of semantic tags</li>
        <b>Balance changes:</b>
        <li>
            Tomes
            <table>
                <tbody><tr>
                    <td>IWC bonus</td>
                    <td>1% -&gt; 10%</td>
                </tr>
            </tbody></table>        
        </li>
        <li>
            Trinket prices (in coins)
            <table>
                <tbody><tr>
                    <td>Magic keyboard</td>
                    <td>200 -&gt; 100</td>
                </tr>
                <tr>
                    <td>Tool box</td>
                    <td>(Has prices now)</td>
                </tr>
            </tbody></table>  
        </li>
        <li>
            Greg price scaling
            <table>
                <tbody><tr>
                    <td>Levels 0-24</td>
                    <td>0.21156 -&gt; 0.17706</td>
                </tr>
            </tbody></table>
            The upgrade cost when a new tool is about to be unlocked is now always 1/3 the cost of that tool
        </li>
    </ul>
</article>

<article id="dev-beta-1_16_8">
    <h2>Dev beta 1.16.8 <a href="#dev-beta-1_16_8"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 8/30/2022</i></p>
    <ul>
        <li>
            Visual overhaul of the mini info section
            <figure>
                <div class="gallery">
                    <img src="/posts/carrot-clicker-changelog/assets/mini info new.png" alt="" loading="lazy" tabindex="0">
                    <img src="/posts/carrot-clicker-changelog/assets/mini info old.png" alt="" loading="lazy" tabindex="0">
                </div>
                <figcaption>Click to enlarge</figcaption>
            </figure>
        </li>
        <li>
            All sliders in settings now have number inputs alongside them
            <figure>
                <div class="gallery">
                    <img src="/posts/carrot-clicker-changelog/assets/slider new.png" alt="" loading="lazy" tabindex="0">
                    <img src="/posts/carrot-clicker-changelog/assets/slider old.png" alt="" loading="lazy" tabindex="0">
                </div>
            </figure>
        </li>
        <li>Coins are now represented by the ⚬ symbol everywhere</li>
        <li>Fixed tips menu not loading</li>
        <li>Moved keybind handler function into the event listener</li>
        <li>
            Reduced the amount of CSS the oled theme uses and fixed some UI elements
            <figure>
                <div class="gallery">
                    <img src="/posts/carrot-clicker-changelog/assets/oled NEW.png" alt="" loading="lazy" tabindex="0">
                    <img src="/posts/carrot-clicker-changelog/assets/oled old.png" alt="" loading="lazy" tabindex="0">
                </div>
            </figure>
        </li>
        <br>
        <h3>Dev tools:</h3>
        <li>
            Replaced character levels with input boxes that can only be interacted with in dev mode
            <video src="/posts/carrot-clicker-changelog/assets/setlevel.mp4" controls="" loop="" muted="" playsinline="" preload="metadata"></video>
        </li>
        <li>Putting #log in the address bar will send console.log, console.warn, and console.error as toasts (experimental, and is very spammy)</li>
    </ul>
</article>

<a href="https://carrot.notkal.com/changelog.txt">
    <div class="button full_width bold">
        <p>View older changes</p>
        <div class="button_shade"></div>
    </div>
</a>
