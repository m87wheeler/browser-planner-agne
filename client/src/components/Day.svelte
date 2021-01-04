<script>
    import DayHead from "./DayHead.svelte";
    import DayTasks from "./DayTasks.svelte";

    export let day = "",
        date,
        type;
</script>

<style type="text/scss">
    .day {
        overflow: hidden;
    }
</style>

<div class="day">
    {#if day}
        <DayHead {day} {date} />
    {/if}
    <DayTasks {date} {type} />
</div>
