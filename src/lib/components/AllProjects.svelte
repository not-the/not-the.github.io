<script>
    import Project from "./Project.svelte"

    import data from "$lib/data/data.json"

    export let style;
</script>

<!-- HTML -->
<div id="projects_list">
    {#each data.projects as proj}
        <Project data={proj} github={true} {style} />
    {/each}

    <!-- Older projects -->
    <details>
        <summary>Older projects</summary>
        {#each data.projects_older as proj}
            <Project data={proj} github={true} />
        {/each}
    </details>
</div>