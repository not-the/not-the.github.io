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

    const context = [
        {
            name: "Open link in new tab",
            href: project.url,
            target: "_blank"
        },
        {
            name: "Copy link address",
            action_copy: project.url
        }
    ];

    // Custom context entries
    if(project.context) {
        context.push("hr", ...project.context);
    }

    // Repo
    if(project.repo) {
        context.push(
            "hr",
            {
                name: `${project.name} on Github`,
                href: project.repo,
                icon: "/assets/icon/github.svg"
            }
        );
    }
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

    data-context={JSON.stringify(context)}
>
    <div class="inner">
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

            <!-- Context menu -->
            <!-- <svg class="more_button" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M219.55-388Q181-388 154-414.78t-27-65.09q0-39.13 27.13-65.63 27.14-26.5 65.24-26.5 38.93 0 66.28 26.73T313-480.13q0 39.13-27.45 65.63-27.45 26.5-66 26.5Zm260.58 0q-39.13 0-65.63-26.78-26.5-26.78-26.5-65.09 0-39.13 26.78-65.63 26.78-26.5 65.09-26.5 39.13 0 65.63 26.73 26.5 26.73 26.5 65.14 0 39.13-26.73 65.63-26.73 26.5-65.14 26.5Zm260.78 0q-39.04 0-66.48-26.78Q647-441.56 647-479.87q0-39.13 27.66-65.63 27.66-26.5 66.5-26.5t65.34 26.73q26.5 26.73 26.5 65.14 0 39.13-26.73 65.63-26.73 26.5-65.36 26.5Z"/></svg> -->
        </div>
    </div>
</a>
