<script>
    import { onDestroy } from "svelte";
    import { clockTime, timeOfDay } from "../../utils/functions";
    import { taskStore } from "../../stores/taskStore";

    $: time = new Date().getTime();
    const timer = setInterval(() => {
        time += 1000;
    }, 1000);

    onDestroy(() => clearInterval(timer));

    $: totalTasks = $taskStore.tasks;
    $: completedTasks = totalTasks.filter((task) => task.complete);
</script>

<style type="text/scss">
    .dashboard {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 1rem;
        background: #fff;

        &__greeting {
            font-size: 0.7rem;
            font-weight: 700;
            text-align: right;
        }
        &__time {
            font-size: 1.25rem;
            font-weight: 500;
            text-align: right;
        }

        &__tasks,
        &__completed {
            font-size: 0.7rem;
            text-align: left;
        }
    }
</style>

<div class="dashboard">
    <div>
        <p class="dashboard__tasks">
            {totalTasks.length}
            task{totalTasks.length !== 1 ? 's' : ''}
            this week
        </p>
        <p class="dashboard__completed">
            {completedTasks.length}
            completed task{completedTasks.length !== 1 ? 's' : ''}
            this week
        </p>
        <p class="dashboard__completed">
            {totalTasks.length - completedTasks.length}
            outstanding task{totalTasks.length - completedTasks.length !== 1 ? 's' : ''}
            this week
        </p>
    </div>
    <div>
        <p class="dashboard__greeting">{timeOfDay(time)} Agne</p>
        <p class="dashboard__time">{clockTime(time)}</p>
    </div>
</div>
