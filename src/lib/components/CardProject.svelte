<script>
    // Functions
    // import { formatDate } from '$lib/functions.js'

    // Data
    import data from "$lib/data/data.json"

    // Props
    export let projectID, size = "large", hoverEffects = "all", pill;

    if(hoverEffects === "none") hoverEffects = null;

    const project = data.projects?.[projectID] ?? data.projects["missing"];

    // const tags = info?.tags?.split?.(', ') ?? false;
</script>

<!-- HTML -->
<a
    href={project.url}
    class={`card ${size}`}
    style={
        `--img: url(${project.hero});
        --bg-color: ${project.color ?? "var(--night-lighter-bg)"};
        --bg-position: ${project.hero_position ?? "center"};`
    }
    data-mouse-highlight={hoverEffects ?? null}
>
    <div class="inner">
        <!-- BG -->
        <div class="hover_bg"></div>

        <!-- New pill -->
        {#if pill}
            <div class="card_pill">{pill}</div>
        {/if}

        <!-- Title -->
        <div class="upper">
            <div class="title_container">
                <h3>
                    {#if project.logo}
                        <img src={project.logo} alt={project.name} class="logo">
                    {:else}
                        {#if project.icon}
                            <img src={project.icon} alt="" class="title_icon">
                        {/if}
                        {project.name}
                    {/if}
                </h3>
            </div>
            {#if project.description}
                <p class="description secondary_text">
                    {project.description}
                </p>
            {/if}
        </div>

        <!-- Bottom -->
        <div class="lower flex">
            <!-- Info -->
            {#if project.card_url !== false}
                <p class="secondary_text card_date">
                    {project.url.substring(8)}
                </p>
            {/if}

            <!-- Tags -->
            {#if project.tags}
                <div class="tags_list">
                    {#each project.tags as tag}
                        <div class="tag">#{tag}</div>
                    {/each}
                </div>
            {/if}

            <!-- <div class="more_button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M479.84-110q-38.84 0-66.34-27.66t-27.5-66.5q0-38.84 27.66-66.34t66.5-27.5q38.84 0 66.34 27.66t27.5 66.5q0 38.84-27.66 66.34t-66.5 27.5Zm0-276q-38.84 0-66.34-27.66t-27.5-66.5q0-38.84 27.66-66.34t66.5-27.5q38.84 0 66.34 27.66t27.5 66.5q0 38.84-27.66 66.34t-66.5 27.5Zm0-276q-38.84 0-66.34-27.66t-27.5-66.5q0-38.84 27.66-66.34t66.5-27.5q38.84 0 66.34 27.66t27.5 66.5q0 38.84-27.66 66.34t-66.5 27.5Z"/></svg>
            </div> -->
        </div>
    </div>
</a>
