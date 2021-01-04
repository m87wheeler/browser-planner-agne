<script>
    import { taskStore } from "../../stores/taskStore";
    import { getMonday } from "../../utils/functions";

    import Day from "../Day.svelte";
    import Title from "../Title.svelte";

    export let style = "";
</script>

<style type="text/scss">
    .planner {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: auto 1fr;
        column-gap: 1rem;
    }
</style>

<div class="planner" {style}>
    <Title style="grid-column: 1 / span 7;">Day Planner</Title>
    <Day
        day="Monday"
        date={getMonday(0, new Date($taskStore.date.start))}
        type="todo" />
    <Day
        day="Tuesday"
        date={getMonday(1, new Date($taskStore.date.start))}
        type="todo" />
    <Day
        day="Wednesday"
        date={getMonday(2, new Date($taskStore.date.start))}
        type="todo" />
    <Day
        day="Thursday"
        date={getMonday(3, new Date($taskStore.date.start))}
        type="todo" />
    <Day
        day="Friday"
        date={getMonday(4, new Date($taskStore.date.start))}
        type="todo" />
    <Day
        day="Saturday"
        date={getMonday(5, new Date($taskStore.date.start))}
        type="todo" />
    <Day
        day="Sunday"
        date={getMonday(6, new Date($taskStore.date.start))}
        type="todo" />
</div>

<!-- <div class="planner" {style}>
    <Title style="grid-column: 1 / span 7;">Day Planner</Title>
    <Day day="Monday" date={getMonday(0)} type="todo" />
    <Day day="Tuesday" date={getMonday(1)} type="todo" />
    <Day day="Wednesday" date={getMonday(2)} type="todo" />
    <Day day="Thursday" date={getMonday(3)} type="todo" />
    <Day day="Friday" date={getMonday(4)} type="todo" />
    <Day day="Saturday" date={getMonday(5)} type="todo" />
    <Day day="Sunday" date={getMonday(6)} type="todo" />
</div> -->
