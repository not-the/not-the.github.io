<script>
    export let data, github;

    const backgroundStyle = data.hero ?
        `background: var(--project-gradient), url('${data.hero}');
        ${data?.hero_position ? `background-position: ${data?.hero_position ?? "center"} !important` : ""}}`
        : null;
</script>

<!-- HTML -->
{#if !data.hidden}
    <div class="project" id={data.id} style={backgroundStyle}>
        <div class="inner flex">
            <!-- Title -->
            <div class="flex">
                <div>
                    <!-- Span so clickable without CSS -->
                    <a href={data.url} class="project_link">
                        <span>Open {data.name}</span>
                    </a>
                    <h3>{data.name}</h3>
                </div>
            </div>

            <!-- Buttons -->
            {#if github}
                <div class="title_buttons flex">
                    <a href={`https://github.com/not-the/${data.id}`} class="label_github button bold small_button" target="_blank" rel="noreferrer" data-label="Github">
                        <img src="/assets/icon/github.svg" alt="View on Github" class="button_icon" style="margin-right: 6px;"> <p>Github</p>
                        <div class="button_shade"></div>
                    </a>
                </div>
            {/if}
        </div>
    </div>
{/if}