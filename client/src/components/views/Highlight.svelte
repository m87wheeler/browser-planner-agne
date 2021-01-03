<script>
    import DayTasks from "../DayTasks.svelte";
    import Header from "../Header.svelte";

    export let type = "",
        header;
</script>

<style type="text/scss">
    .highlight {
        display: grid;
        grid-template-rows: auto 1fr;
        background: #566573;
    }
</style>

<div class="highlight">
    <Header>{header}</Header>
    <DayTasks date={new Date()} {type} highlight />
</div>
