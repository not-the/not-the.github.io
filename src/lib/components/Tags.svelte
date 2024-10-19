<script>
    export let tagsString = '';

    const tags = tagsString?.split?.(', ') ?? false;
</script>

<div class="tags_list">
    <!-- <div class="tag" style="--color: white;">#dev</div> -->
    {#each tags as tag}
        <div class="tag">#{tag}</div>
    {/each}
</div>
