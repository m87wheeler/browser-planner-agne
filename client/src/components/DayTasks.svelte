<script>
    import { taskStore } from "../stores/taskStore";
    import Task from "./Task.svelte";
    import TaskInput from "./TaskInput.svelte";
    // import NewTask from "./views/NewTask.svelte";

    export let date,
        type,
        highlight = false;

    // get start and end times of date
    const start = new Date(date).setHours(0, 0, 0, 0);
    const end = new Date(date).setHours(23, 59, 59, 999);

    $: inputActive = false;
    const addInput = () => (inputActive = true);
    const handleClose = async (task) => {
        if (inputActive && task.length) {
            const req = await fetch("http://localhost:3000/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    task,
                    type,
                    date: date.toISOString(),
                }),
            });
            const res = await req.json();
            if (res.success) {
                taskStore.addTask({
                    _id: res._id,
                    task,
                    type,
                    date: date.toISOString(),
                });
            } else {
                alert(res.message);
            }
        }
        inputActive = false;
    };
</script>

<style type="text/scss">
    .list {
        display: grid;
        grid-template-rows: 2rem 2rem auto;
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

<div class="list" on:click={addInput}>
    <!-- <NewTask {inputActive} handleClick={handleClose} /> -->
    <TaskInput {inputActive} handleClick={handleClose} />
    <ul class="list__container">
        {#if !highlight}
            {#each $taskStore as item}
                {#if new Date(item.date) >= start && new Date(item.date) <= end && item.type === type}
                    <Task taskObj={item} complete={item.complete} />
                {/if}
            {/each}
        {:else}
            {#each $taskStore as item}
                <!-- if item date fits into week datetimes as unix-->
                {#if new Date(item.date).getTime() >= start && new Date(item.date).getTime() < end + 1000 * 60 * 60 * 24 * 7 && item.type === type}
                    <Task taskObj={item} complete={item.complete} />
                {/if}
            {/each}
        {/if}
    </ul>
</div>
