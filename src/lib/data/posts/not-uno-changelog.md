---
title: NOT UNO Changelog
description: Update history for NOT UNO
author: not-the
banner: url('/assets/project/Not Uno Banner noicon dark.png')

created: 11/1/2024
modified: 11/26/2024

id: not-uno-changelog
tags: gamedev, changelog

contents: [{"name":"November 26, 2024","id":"November-26-2024"},{"name":"November 12, 2024","id":"November-12-2024"},{"name":"November 10, 2024","id":"November-10-2024"},{"name":"November 8, 2024","id":"November-8-2024"},{"name":"November 1, 2024","id":"November-1-2024"}]
---

Update history for [NOT UNO](https://uno.notkal.com/)


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
