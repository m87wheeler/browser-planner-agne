<script>
    import { taskStore } from "../stores/taskStore";
    import Task from "./Task.svelte";

    export let date,
        type,
        highlight = false;

    // get start and end times of date
    $: start = new Date(date).setHours(0, 0, 0, 0);
    $: end = new Date(date).setHours(23, 59, 59, 999);

    const openInput = () => taskStore.enableInput(date, type, true);
</script>

<style type="text/scss">
    .list {
        display: grid;
        grid-template-rows: auto;
        grid-auto-rows: auto;
        row-gap: 0.5rem;
        justify-items: center;
        padding: 0.5rem 0;
        height: 100%;
        background: #788795;

        &:hover {
            background: #8998a6;
            cursor: pointer;
        }

        &__container {
            width: calc(100% - 1rem);
        }
    }
</style>

<div class="list" on:click={openInput}>
    <ul class="list__container">
        {#if !highlight}
            {#each $taskStore.tasks as item}
                {#if new Date(item.date) >= start && new Date(item.date) <= end && item.type === type}
                    <Task taskObj={item} complete={item.complete} />
                {/if}
            {/each}
        {:else}
            {#each $taskStore.tasks as item}
                <!-- if item date fits into week datetimes as unix-->
                {#if new Date(item.date).getTime() >= start && new Date(item.date).getTime() < end + 1000 * 60 * 60 * 24 * 7 && item.type === type}
                    <Task taskObj={item} complete={item.complete} />
                {/if}
            {/each}
        {/if}
    </ul>
</div>
