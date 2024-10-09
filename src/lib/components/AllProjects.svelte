<script>
    // Components
    import Project from "./Project.svelte"

    // Data
    import data from "$lib/data/data.json"

    // Props
    export let style;
</script>

<!-- HTML -->
<div id="projects_list">
    {#each Object.values(data.projects) as proj}
        <Project data={proj} github={true} {style} />
    {/each}

    <!-- Older projects -->
    <details>
        <summary>Older projects</summary>
        {#each Object.values(data.projects_older) as proj}
            <Project data={proj} github={true} />
        {/each}
    </details>
</div>