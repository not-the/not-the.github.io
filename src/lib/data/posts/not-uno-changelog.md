---
title: NOT UNO Changelog
description: Update history for NOT UNO
author: not-the
banner: url('/assets/project/Not Uno Banner noicon dark.png')

created: 11/1/2024
modified: 1/11/2025

id: not-uno-changelog
tags: gamedev, changelog

contents: [{"name":"April 23, 2025","id":"April-23-2025"},{"name":"December 6, 2024","id":"December-6-2024"},{"name":"November 26, 2024","id":"November-26-2024"},{"name":"November 12, 2024","id":"November-12-2024"},{"name":"November 10, 2024","id":"November-10-2024"},{"name":"November 8, 2024","id":"November-8-2024"},{"name":"November 1, 2024","id":"November-1-2024"}]
---

Update history for [NOT UNO](https://uno.notkal.com/)


<article id="April-23-2025">
<h2>April 23, 2024 <a href="#April-23-2025"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>

- Card sorting toggle
- The host can now kick users from public lobbies
- Number keys 1-9 will play the appropriate card and D will draw from the deck
- The deck and pile will have a visual stack of cards depending on how big they are (this was broken before)
- Fixed the turn arrow rotating the wrong direction (when going between the first and last player)
- Classic 7-0 rule banner image
- "Support NOT UNO" button and prompt on win screen
- Fixed online user count (on home page) appearing as zero when no public games are listed
- Refactored server code
    - Split into multiple modules
    - Replaced username request system with Socket.io handshakes
    - Improved the way names & avatars are stored
    - Console messages look nicer and have timestamps
    - Cards have unique IDs instead of going by their index

</article>


<article id="December-6-2024">
<h2>December 6, 2024 <a href="#December-6-2024"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>

- "Who goes first" config option
- 7-0 rule deck
- "How to play" button + menu in the footer
- Fixed the deck not taking cards from the pile when it runs out

</article>


<article id="November-26-2024">
<h2>November 26, 2024 <a href="#November-26-2024"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>

- Overhauled the deck picker UI in the lobby
- Internal support for wild cards with a custom set of colors to choose from
- Fixed Choose Color and Choose Player prompts persisting when starting a new game
- Page will no longer crash (white screen) when the server is unavailable

</article>


<article id="November-12-2024">
<h2>November 12, 2024 <a href="#November-12-2024"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>

- Action cards (Wild, Target draw, Swap hands) can now be cancelled

</article>


<article id="November-10-2024">
<h2>November 10, 2024 <a href="#November-10-2024"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
  
- Max players option
- Newly drawn cards will now be scrolled into view
- You can scroll through overflowing cards with the mouse wheel
- Fixed draw debt (on end turn button) not getting cleared when a new game is started
- White screen/crash fixes

</article>


<article id="November-8-2024">
<h2>November 8, 2024 <a href="#November-8-2024"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
  
- Spectators will now be kicked when the spectate option is turned off
- Removed redundant set username button from profile menu; the done button now updates your username
- Fixed a crash when spectating the win screen

**Technical changes**

- The server will no longer accept arbitrary config values from the client
- In certain cases, the server will now notify you if you've been disconnected from a game
- The client now gets leave game signals from the server

</article>


<article id="November-1-2024">
<h2>November 1, 2024 <a href="#November-1-2024"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>

- Added option to spectate public lobbies (Can be turned off in your room config)
- "Always Play" option. Lets you toggle whether players keep their turn even after being forced to draw cards
- "Matching" option in the draw stacking dropdown (now the default value)
- "Are your sure?" prompt when starting a game by yourself

</article>
