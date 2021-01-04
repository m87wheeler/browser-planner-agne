<script>
    import { taskStore } from "../stores/taskStore";
    import { fetchTasks } from "../utils/functions";

    export let type;

    const populateTasks = async (from, to) => {
        const data = await fetchTasks(from, to);
        data.length ? taskStore.populate(data) : console.log("No tasks");
    };

    const handleClick = () => {
        type === "increment"
            ? taskStore.incrementWeek()
            : taskStore.decrementWeek();

        populateTasks($taskStore.date.start, $taskStore.date.end);
    };
</script>

<style type="text/scss">
    .bar {
        position: fixed;
        top: 12vh;
        height: 88vh;
        width: 0.9rem;
        display: flex;
        background: #fff;
        opacity: 0;
        cursor: pointer;

        span {
            margin-left: -0.35rem;
            width: 0.9rem;
            align-self: center;
            font-size: 2rem;
            color: #566573;
        }

        &:hover {
            opacity: 0.6;
        }

        &--increment {
            right: 0;
        }
        &--decrement {
            left: 0;

            span {
                margin: 0;
                margin-left: 0.35rem;
                transform: rotate(180deg);
            }
        }
    }
</style>

<div
    class="bar"
    class:bar--increment={type === 'increment'}
    class:bar--decrement={type === 'decrement'}
    on:click={handleClick}>
    <span>&#9656;</span>
</div>
