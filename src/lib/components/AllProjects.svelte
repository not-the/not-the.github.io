<script>
    // Components
    // import Project from "./Project.svelte"
    import CardProject from "./CardProject.svelte"

    // Data
    import data from "$lib/data/data.json"

    // Props
    export let style;
</script>

<!-- HTML -->
<div id="projects_list" class="cards_container">
    {#each Object.entries(data.projects) as [id, data]}
        <!-- <Project data={proj} github={true} {style} /> -->
        {#if !data.hidden}
            <CardProject projectID={id} size="normal" hoverEffects="none" />
        {/if}
    {/each}

    <!-- Older projects -->
    <!-- <details>
        <summary>Older projects</summary>
        {#each Object.values(data.projects_older) as proj}
            <Project data={proj} github={true} />
        {/each}
    </details> -->
</div>