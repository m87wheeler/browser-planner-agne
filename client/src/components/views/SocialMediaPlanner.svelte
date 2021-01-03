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
    <Header style="grid-column: 1 / span 7;">Social Media Planner</Header>
    <Day date={getMonday(0)} type="social" />
    <Day date={getMonday(1)} type="social" />
    <Day date={getMonday(2)} type="social" />
    <Day date={getMonday(3)} type="social" />
    <Day date={getMonday(4)} type="social" />
    <Day date={getMonday(5)} type="social" />
    <Day date={getMonday(6)} type="social" />
</div>
