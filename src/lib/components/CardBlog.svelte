<script>
    // Components
    import Tags from './Tags.svelte'

    // Functions
    import { formatDate } from '$lib/functions.js'

    // Props
    export let postID, info, body;

    // Get post info
    // let info = {}, body = '';
    // const file = fetchMarkdownFile(postID);
    // const { info, body } = mdToFormatted(file);
</script>

<!-- HTML -->
<a href={`/posts/${postID}`} class="card" style={`
    --img: ${info.banner};
    --bg-color: ${info.card_accent ?? "var(--night-lighter-bg)"};
`} data-mouse-highlight="all">
    <div class="inner">
        <!-- BG -->
        <div class="hover_bg"></div>

        <!-- Title -->
        <div class="upper">
            <h3>{info.title}</h3>
            {#if info.description}
                <p class="description secondary_text">
                    {info.description}
                </p>
            {/if}
        </div>

        <!-- Bottom -->
        <div class="lower flex">
            <!-- Info -->
            <p class="secondary_text card_date">
                <!--not-the | -->{formatDate(info.created)}
            </p>

            <!-- Tags -->
            {#if info.tags}
                <Tags tagsString={info.tags} />
            {/if}
        </div>
    </div>
</a>


<!-- <div class="card" id={postID}>
    <a href={`/posts/${postID}`} class="project_link"><div class="project_link_area"></div></a>
    <h3>{info.title}</h3>
    <p>
        {info.description}
    </p>
    <p class="secondary_text">not-the | {formatDate(info.created)}</p>
</div> -->
