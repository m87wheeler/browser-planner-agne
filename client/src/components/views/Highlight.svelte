<script>
    import { taskStore } from "../../stores/taskStore";

    import DayTasks from "../DayTasks.svelte";
    import Title from "../Title.svelte";

    export let type = "",
        title;
</script>

<style type="text/scss">
    .highlight {
        display: grid;
        grid-template-rows: auto 1fr;
        background: #566573;
    }
</style>

<div class="highlight">
    <Title>{title}</Title>
    <DayTasks date={new Date().getTime()} {type} highlight />
</div>
