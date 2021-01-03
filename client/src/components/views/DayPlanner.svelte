<script>
    import { getMonday } from "../../utils/functions";
    import Day from "../Day.svelte";
    import Header from "../Header.svelte";

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
    <Header style="grid-column: 1 / span 7;">Day Planner</Header>
    <Day day="Monday" date={getMonday(0)} type="todo" />
    <Day day="Tuesday" date={getMonday(1)} type="todo" />
    <Day day="Wednesday" date={getMonday(2)} type="todo" />
    <Day day="Thursday" date={getMonday(3)} type="todo" />
    <Day day="Friday" date={getMonday(4)} type="todo" />
    <Day day="Saturday" date={getMonday(5)} type="todo" />
    <Day day="Sunday" date={getMonday(6)} type="todo" />
</div>
