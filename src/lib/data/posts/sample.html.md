---
title: sample.html
description: Description goes here
author: not-the
banner: /assets/banner/gradient_2.png

created: 1970-01-01T05:00:00.000Z
modified: 1970-01-01T05:00:00.000Z
---
## Header 2
### Header 3
#### Header 4
##### Header 5
##### Header 6

<br/>

Normal paragraph. <a href="#">Link to somewhere</a>. You can have <b>bold</b>, <span class="emphasize">emphasized</span>, or **bold & emphasized text**, *italicized text*, <sup>Superscript</sup> and <sub>subsscript</sub> too.

<p class="big_letter">
    Big first letter (dropcap). Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis necessitatibus repellendus excepturi beatae iste in natus culpa officia eum distinctio, tenetur enim! Voluptatibus reprehenderit sint quasi similique eveniet, placeat, quas illum cum pariatur debitis totam voluptatum excepturi nobis illo cumque, expedita sit error quidem quo.
</p>

<p class="indent">
    Indented paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque magni id odio nihil reprehenderit impedit suscipit atque aspernatur totam temporibus, veniam vitae debitis cupiditate eveniet tempore tempora odit vero?
</p>

<q>
    Small quote &lt;q&gt;
</q>

<h3>Blockquote</h3>
<blockquote>
    This is a blockquote, meaning the contents of this element are from a source other than this website.
    <cite>Unknown</cite>
</blockquote>

> This is a MARKDOWN blockquote
> - Source

<h3></h3>

<h3>Table</h3>
<table>
    <tr>
        <th>Fruits</th>
        <th>Pizza Toppings</th>
        <th>Total</th>
        <th>Notes</th>
    </tr>
    <tr>
        <td>Tomato</td>
        <td>Pineapple</td>
        <td>$7.95</td>
        <td></td>
    </tr>
    <tr>
        <td>Cucumber</td>
        <td>Anchovies</td>
        <td>42₪</td>
        <td></td>
    </tr>
    <tr>
        <td>Pumpkin</td>
        <td>Banana</td>
        <td>0.000024฿</td>
        <td></td>
    </tr>
</table>
<br/>

`small codeblock`

```js
/** Scrolls page to top */
function toTop(closemenu=false) &lbrace
window.scrollTo(0, 0);
document.activeElement.blur(); // Move keyboard navigation back to start
if(closemenu) toggleMenu();
}
```

<pre><code data-lang="js"><span class="code-comment">// Code block containing code

/** Scrolls page to top */</span>
<span class="code-boolean">function</span> <span class="code-function">toTop</span>(<span class="code-variable">closemenu</span>=<span class="code-boolean">false</span>) &lbrace
<span class="code-variable">window</span>.<span class="code-function">scrollTo</span>(<span class="code-number">0</span>, <span class="code-number">0</span>);
<span class="code-variable">document</span>.<span class="code-variable">activeElement</span>.<span class="code-function">blur</span>(); <span class="code-comment">// Move keyboard navigation back to start</span>
<span class="code-keyword">if</span>(<span class="code-variable">closemenu</span>) <span class="code-function">toggleMenu</span>();
}</code></pre>

<p>This is <code>Inline code!</code></p>

<h3>&lt;hr&gt; tag</h3>
<hr>

<h3>List</h3>
<ul>
    <li>Apples</li>
    <li>Oranges</li>
    <li>Bananas</li>
    <li>Grapes</li>
</ul>

<h3>Ordered List</h3>
<ol>
    <li>Item 1</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ol>

<article id="article">
    <h2>Article Tag <a href="#article"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p>Article content</p>
    <a href="#article">Link to article - article gets special formatting</a>
</article>
<article id="another_article">
    <h2>Another Article <a href="#another_article"><img src="/assets/icon/link.svg" alt="Copy a link to this section" class="icon article_url_button" role="button" tabindex="0"></a></h2>
    <p>Article content</p>
    <a href="#another_article">Link to article - article gets special formatting</a>
</article>

<h3>Buttons</h3>
<a href="#">
    <div class="button full_width bold">
        <p>URL Button</p>
        <div class="button_shade"></div>
    </div>
</a>
<a href="#">
    <div class="button full_width bold button_blue">
        <p>Blue URL Button</p>
        <div class="button_shade"></div>
    </div>
</a>
<a href="#">
    <div class="button full_width bold button_red">
        <p>Red URL Button</p>
        <div class="button_shade"></div>
    </div>
</a>
<button class="button full_width bold" onclick="console.log('Normal button')">
    <p>Normal Button</p>
    <div class="button_shade"></div>
</button>
<button class="button full_width bold" onclick="toast.send('Toast Notification', 'This is a toast notification', true)">
    <p>Click to see a toast notification</p>
    <div class="button_shade"></div>
</button>

<h3>Inputs</h3>
<p>
    <label for="sample_checkbox">
        <input type="checkbox" name="sample_checkbox" id="sample_checkbox"> Checkbox
    </label><br/>
</p>

<b class="emphasize">Switch checkbox:</b><br/>
<label class="switch">
    <input type="checkbox">
    <span></span>
    <div class="on">I</div>
    <div class="off">O</div>
</label>
<br/><br/>

<p>
    <b class="emphasize">Choose one:</b><br/>
    <label for="sample_radio">
        <input type="radio" name="sample_radio" id="sample_radio"> Radio button
    </label><br/>
    <label for="sample_radio_2">
        <input type="radio" name="sample_radio" id="sample_radio_2"> Another radio button
    </label>
</p>

<p>
    <label for="sample_text_input">
        <input type="text" name="sample_text_input" id="sample_text_input" placeholder="Placeholder text...">
    </label>
</p>

<select name="sample_select" class="full_width">
    <option selected="true" disabled="disabled">Choose one...</option>
    <option value="Option 1">Option 1</option>
    <option value="Option 1">Option 2</option>
    <option value="Option 1">Option 3</option>
</select><br/><br/>

<p>
    <b>Progress bars</b>
    <progress max="100" value="60"></progress>
    <progress></progress>
</p>

<h2>Images & Video</h2>
<figure>
    <img src="/assets/project/minecraft_worlds_big.png" alt="Image caption">
    <figcaption>Image caption</figcaption>
</figure>

<figure>
    <div class="gallery">
        <img src="/assets/project/carrot_clicker_big.png" alt="Image caption">
        <img src="/assets/project/minecraft_worlds_big.png" alt="Image caption">
        <img src="/assets/project/confetti.png" alt="Image caption">
        <img src="/assets/project/minecraft_worlds_big.png" alt="Image caption">
        <img src="/assets/project/minecraft_worlds_big.png" alt="Image caption">
    </div>
    <figcaption>Horizontal image gallery</figcaption>
</figure>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>