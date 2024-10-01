---
title: PIXI.JS Mario Changelog
description: Update history for PIXI.JS Mario
author: not-the
banner: url('/assets/banner/gradient_3.png')

created: 6/17/2023
modified: 7/5/2023
---

<p>Update history for <a href="https://mario.notkal.com/">PIXI.JS Mario</a></p>

<article id="update_v0_18">
    <h2>Update v0.18 <a href="#update_v0_18"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 7/5/2023</i></p>
    <ul>
        <li>Fixed red shells being intangible</li>
        <li>Non-players will no longer take damage from spikes</li>
        <li>Non-players no longer collect coins</li>
        <li>Reverse slopes are now functional</li>
        <li>Fixed background color not resetting when creating a new level</li>
        <li>Fixed the camera panning back to the start of the stage upon death in singleplayer</li>
        <li>The player will now blink during invincibility frames</li>
        <li>Updated Spikes texture</li>
        <li>Cloud flower texture</li>
        <h4>Tiles:</h4>
        <li>Ice</li>
        <li>Donut</li>
        <li>Lava (lava, lava_top)</li>
    </ul>
</article>

<article id="update_v0_17">
    <h2>Update v0.17 <a href="#update_v0_17"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 7/3/2023</i></p>
    <ul>
        <h4>Enemy Interactions &amp; Behavior fixes</h4>
        <li>Fixed interactions for a number of entities</li>
        <li>Fixed the camera panning during the pause that powering up causes, and while editor mode is enabled</li>
        <li>Typing with the draw dropdown open will no longer change your selection (eg pressing Q to close would also select "Question Block")</li>
        <h4>Internal changes</h4>
        <li>Renamed the class "physicsObject" -&gt; "entity"</li>
        <li>Created extensions of the "entity" class for entities with unique code/interactions</li>
    </ul>
</article>

<article id="update_v0_16">
    <h2>Update v0.16 <a href="#update_v0_16"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 5/26/2023</i></p>
    <ul>
        <h4>Sub-levels</h4>
        <li>Sub-level support (import only, needs to be manually added to JSON file after exporting 2 levels)</li>
        <li>Dying with only one player onscreen will now reset the level. Dying with more than 1 will respawn you at the location of the most recently spawned player</li>
        <li>Added autoscroll functionality</li>
        <li>Temporary fix for upward/downward camera movement not working in editor mode</li>
        <li>Fixed projectiles (fireballs/lemons) becoming infinite</li>
        <li>Fixed editor camera panning not working if the player is deleted, or more are added</li>
        <li>Fixed items inside of containers not appearing in editor mode</li>
        <li>Fixed editor ghosts being clickable</li>
        <h4>Tiles:</h4>
        <li>Horizontal pipes</li>
        <li>Cloud Platform</li>
        <li>Conveyor Belts</li>
        <li>Conveyor Belts (Fast)</li>
    </ul>
</article>

<article id="update_v0_15">
    <h2>Update v0.15 <a href="#update_v0_15"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 5/26/2023</i></p>
    <ul>
        <li>Option to change the stage background color</li>
        <li>Fixed coins acting as flagpoles</li>
        <h4>Objects:</h4>
            + SMB3 Mario
    </ul>
</article>

<article id="update_v0_14">
    <h2>Update v0.14 <a href="#update_v0_14"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 5/24/2023</i></p>
    <ul>
        <li>Moved tile/object toolbox to be an overlay in the game. Open by clicking the block button in the editor</li>
        <li>"Q" can also be pressed to view the toolbox anywhere</li>
        <li>Added "Scroll behavior" in stage config </li>
        <li>Added a "Can't go left" option</li>
        <li>Flagpole behavior</li>
        <li>Fixed editor objects staying highlighted after deselected</li>
        <li>Fixed shells not bouncing off of walls</li>
    </ul>
</article>

<article id="update_v0_13">
    <h2>Update v0.13 <a href="#update_v0_13"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 5/23/2023</i></p>
    <ul>
        <h4>Level Editor</h4>
        <li>Basic editor mode (WIP)</li>
        <li>Made it so that you can no longer walk off the screen</li>
        <li>Clicking "identify" for a controller will now shake the icon on screen</li>
        <li>Freecam can no longer be panned outside the stage</li>
        <li>Freecam now correctly changes the culled/unculled region</li>
        <li>WASD now work for freecam, and freecam is now editor mode only</li>
        <li>Buffed Mario &amp; Luigi's acceleration values (and by consequence their walk+run speeds), to be more in line with the games
            <table>
                <tbody><tr>
                    <th>Stat</th>
                    <th>Old</th>
                    <th>New</th>
                </tr>
                <tr>
                    <td>Mario acceleration</td>
                    <td>0.075</td>
                    <td>0.085</td>
                </tr>
            </tbody></table>
        </li>  
        <li>Mega Man:
            <table>
                <tbody><tr>
                    <th>Stat</th>
                    <th>Old</th>
                    <th>New</th>
                </tr>
                <tr>
                    <td>Walk</td>
                    <td>2.15</td>
                    <td>2.5</td>
                </tr>
                <tr>
                    <td>Gravity</td>
                    <td>1</td>
                    <td>1.4</td>
                </tr>
                <tr>
                    <td>Jump</td>
                    <td>5.5</td>
                    <td>7</td>
                </tr>
            </tbody></table>
        </li>
        <li>Fixed the HUD (lives/coin counter) not panning up/down, occasionally jittering, and not being rendered on top</li>
        <li>Fixed players that weren't player 1 not bouncing off of enemies</li>
    </ul>
</article>

<article id="update_v0_12">
    <h2>Update v0.12 <a href="#update_v0_12"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 5/20/2023</i></p>
    <ul>
        <li>Added playable Mega Man (WIP)</li>
        <li>Players are now bounced instead of hurt if the block under them is hit</li>
        <li>Fixed a crash when bouncing a mushroom by hitting the block it's on</li>
        <li>Fixed a crash when a player-controlled enemy dies</li>
    </ul>
</article>

<article id="update_v0_11">
    <h2>Update v0.11 <a href="#update_v0_11"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 5/19/2023</i></p>
    <ul>
        <h4>Controller Support + Local Multiplayer</h4>
        <li>
            Controller support + local multiplayer
            <p><i>Mario is player 1 and Luigi is player 2, by default. They can both be assigned to players 3 and 4 through the console (for now)</i></p>
        </li>
        <li>Added a player/gamepad management UI</li>
        <li>Luigi parkour sprites</li>
        <li>Fixed vertical squashing at some resolutions</li>
        <li>Improved bounce function</li>
        <h4>Tiles:</h4>
            <li>Bridge</li>
            <li>Pole</li>
            <li>Pole (Top)</li>
        <h4>Objects:</h4>
            <li>Flag</li>
        <h4>Structures:</h4>
            <li>Flagpole</li>
    </ul>
</article>

<article id="update_v0_10">
    <h2>Update v0.10 <a href="#update_v0_10"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 5/16/2023</i></p>
    <ul>
        <li>Slight changes to the main menu</li>
        <li>Touch controls should no longer appear on non-touch devices</li>
        <li>Added a touch screen controls toggle to settings</li>
    </ul>
</article>

<article id="update_v0_9">
    <h2>Update v0.9 <a href="#update_v0_9"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 5/16/2023</i></p>
    <ul>
        <li>Vertical stage support</li>
        <li>HUD no longer disappears when the camera scrolls</li>
        <li>Fixed Luigi and Red Koopa causing a crash</li>
        <li>Fixed fireballs bouncing in midair</li>
        <li>Added a main menu/pause menu, and an HTML UI for level creation/importing/exporting</li>
        <li>Support for tiles that have collision on specific sides</li>
        <li>Unfinished slopes</li>
        <li>Added a page favicon</li>
        <li>Implemented a limit of 250 physics objects</li>
        <li>Gave stage width/height minimum and maximum values</li>
        <li>Added export button to menu, clicking it downloads the current level as a JSON file</li>
        <li>Drag and drop/upload level functionality + import menu</li>
    </ul>
</article>

<article id="update_v0_8">
    <h2>Update v0.8 <a href="#update_v0_8"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 4/29/2023</i></p>
    <ul>
        <li>Objects inside containers are now visible while the game is paused</li>
        <li>Objects placed while paused will now reflect the direction they are facing</li>
        <li>Using the eraser on a physics object will now work instantly while the game is paused</li>
        <li>Enemies on top of a question or brick block when it is hit will now take damage</li>
        <li>Reworked the way damage/interactions work</li>
        <li>Fixed some shell/player interactions being incorrect (WIP)</li>
        <li>Objects or enemies that aren't killed when hit from underneath (brick or ? hit with them on top) will now bounce</li>
        <li>Gave Starman a sprite and functionality</li>
        <li>Placing a structure partially out of bounds no longer throws errors</li>
        <li>Moved sprite data to sheet.json</li>
        <li>Fixed intangible objects colliding with tiles horizontally</li>
        <li>Enemies will now despawn when outside of the stage horizontally</li>
        <h4>General camera improvements</h4>
            <li>Position is an average of all player's positions</li>
            <li>Doesn't move when you are in the middle of the screen</li>
            <li>Doesn't pan outside of the stage</li>
            <li>Fixed camera not resetting on death</li>
        <h4>Objects</h4>
            <li>Cloud flower</li>
            <li>Bullet Bill</li>
    </ul>
</article>

<article id="update_v0_7">
    <h2>Update v0.7 <a href="#update_v0_7"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 4/17/2023</i></p>
    <ul>
        <li>Powerup that enables wall jumping &amp; ground pounding</li>
        <li>Physics objects are now stored in an object instead of an array</li>
        <li>Pressing shift now increases the freecam pan speed</li>
        <li>Potential fix for sprites not despawning entirely</li>
        <li>Misc fixes</li>
        <h4>Objects</h4>
            <li>Parkour mushroom</li>
    </ul>
</article>

<article id="update_v0_6">
    <h2>Update v0.6 <a href="#update_v0_6"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 4/13/2023</i></p>
    <ul>
        <li>Off-screen tiles are now culled (horizontally only)</li>
        <li>Off-screen objects are now frozen and culled</li>
        <li>Fire Flower functionality</li>
        <li>Damage sources no longer instantly kill the player</li>
        <li>Invinicibility period after taking damage</li>
        <li>Coins and multi coins can now be inserted into containers</li>
        <li>Importing/exporting levels now saves container data</li>
        <h4>Fixes</h4>
            <li>Fixed vertical collision for 2 tall sprites</li>
            <li>Fixed block collision not being updated when a tile is set via the .set() method</li>
            <li>Fixed tile offset bug from running a tile animation before the last one was finished</li>
            <li>Fixed 2-tall sprites not sending collide/inside events</li>
        <h4>Tiles</h4>
            <li>Multi coin</li>
        <h4>Objects</h4>
            <li>Mount</li>
        <h4>Structures</h4>
            <li>Castle</li>
    </ul>
</article>

<article id="update_v0_5">
    <h2>Update v0.5 <a href="#update_v0_5"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 4/10/2023</i></p>
    <ul>
        <li>Bricks now correctly act as containers</li>
        <li>Jump height is now dependant on how long the jump button is held for</li>
        <li>Support for entity riding. Goombas will now form a stack when placed above one another</li>
        <li>Collision for 2 tall sprites</li>
        <li>Mushroom works now</li>
        <li>Players now bounce off of each other's heads</li>
        <li>General improvements to collision
            <ul>
                <li>You can now stand on the edge of a block</li>
                <li>You can collide into the bottom of multiple tiles at once</li>
                <li>Clipping into blocks horizontally is now harder</li>
            </ul>
        </li>
        <h4>Tiles:</h4>
            <li>Coin</li>
        <h4>Objects:</h4>
            <li>Flower</li>
            <li>Fireball</li>
    </ul>
</article>

<article id="update_v0_4">
    <h2>Update v0.4 <a href="#update_v0_4"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 4/8/2023</i></p>
    <ul>
        <li>Basic touchscreen controls</li>
        <li>Interactions with bricks and ? boxes</li>
        <li>Ability to put items into containers (no visual feedback yet)</li>
        <li>Coin counter and coins in containers by default (no coin tiles yet)</li>
        <li>Overhauled the way object properties are handled, the spawn function can now override properties like texture and motion</li>
        <li>Fixes
            <ul>
                <li>Fixed tiles not animating correctly when importing a level</li>
                <li>Fixed turn_at_ledge ai turning in midair</li>
                <li>Fixed objects with collision disabled still interacting with other objects</li>
                <li>Generic fixes to shell physics</li>
            </ul>
        </li>
        <li>Tiles
            <ul>
                <li>Invisible Block</li>
                <li>Spikes</li>
            </ul>
        </li>
        <li>Objects
            <ul>
                <li>Luigi</li>
                <li>Mushroom</li>
                <li>Particle</li>
            </ul>
        </li>
        <br>
        <h4>New</h4>
        <li>Levels
            <ul>
                <li>1-1</li>
            </ul>
        </li>
        <li>Playable characters
            <ul>
                <li>Luigi</li>
            </ul>
        </li>
    </ul>
</article>

<article id="update_v0_3">
    <h2>Update v0.3 <a href="#update_v0_3"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 4/7/2023</i></p>
    <ul>
        <li>Pressing escape pauses the game</li>
        <li>Added placeable structures</li>
        <li>Import/export level functionality</li>
        <li>The erase tool now works on physics objects</li>
        <li>Unique enemy death animation when killed by something that isn't a player (like a shell)</li>
        <li>The game should now run at the same speed for both 60 and 120hz screens (game physics still run at 120)</li>
        <li>New stage element selection</li>
        <li>
            Tiles
            <ul>
                <li>Bush (Medium)</li>
                <li>Bush (Large)</li>
                <li>Cloud</li>
                <li>Hill</li>
                <li>Hill (Large)</li>
            </ul>
        </li>
        <li>
            Structures
            <ul>
                <li>Pipe</li>
                <li>Pipe neck</li>
            </ul>
        </li>
        <li>
            Objects
            <ul>
                <li>Koopa</li>
                <li>Shell</li>
            </ul>
        </li>
    </ul>
</article>

<article id="update_v0_2">
    <h2>Update v0.2 <a href="#update_v0_2"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 4/7/2023</i></p>
    <ul>
        <li>Interactions between the player and enemies</li>
        <li>Basic horizontal camera panning</li>
        <li>Draw tool support for spawning physics objects</li>
        <li>Mouse wheel to zoom and arrow keys to freecam</li>
        <li>The player now has a lives stat</li>
        <li>Falling off the bottom of the screen will now kill you</li>
        <li>Fixed an issue where the player would act as if inside a block while off the top of the screen</li>
        <li>
            Tiles
            <ul>
                <li>Brick</li>
                <li>Question box</li>
                <li>Bush</li>
            </ul>
        </li>
    </ul>
</article>

<article id="update_v0_1">
    <h2>Update v0.1 <a href="#update_v0_1"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p><i>not-the | 4/5/2023</i></p>
    <ul>
        <li>Collision</li>
        <li>Reworked physics objects (such as the player) into a class</li>
        <li>Added a basic enemy AI</li>
        <li>Dropdown for selecting tile to draw</li>
        <li>General tweaks/improvements to the controls + physics</li>
        <li>&amp; More</li>
    </ul>
</article>
