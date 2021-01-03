<script>
    import { taskStore } from "../stores/taskStore";

    export let taskObj = {},
        complete = false;
    const { _id, task } = taskObj;

    // toggle task completion
    const toggleComplete = async (e) => {
        const req = await fetch(`http://localhost:3000/update/${_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                complete: e.target.checked,
            }),
        });
        const res = await req.json();
        if (res.success) taskStore.toggleComplete(_id);
    };

    // delete task
    const handleDelete = async () => {
        const req = await fetch(`http://localhost:3000/delete/${_id}`, {
            method: "DELETE",
        });
        const res = await req.json();
        res.success && taskStore.deleteTask(_id);
    };
</script>

<style type="text/scss">
    .task {
        width: 100%;
        margin-bottom: 0.1rem;
        font-size: 0.9rem;
        background: #ccc;

        &:hover {
            background: #566573;
            color: #fff;
        }

        &__label {
            padding: 0.25rem;
            display: grid;
            grid-template-columns: 1fr auto auto;
            column-gap: 0.25rem;
            align-items: center;
            cursor: pointer;

            input {
                opacity: 0;
                cursor: pointer;
            }
        }

        &__text {
            &--complete {
                color: #888;
                text-decoration: line-through;
            }
        }

        &__button {
            width: 1.5rem;
            height: 1.5rem;
            color: #fff;
            background: transparent;
            border: none;
            line-height: 1.5rem;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
                background: #fff;
            }

            img {
                width: 1.5rem;
                height: 1.5rem;
                padding: 0.25rem;
            }
        }
    }
</style>

<li class="task">
    <label class="task__label">
        <span
            class="task__text"
            class:task__text--complete={complete}>{task}</span>
        <input
            type="checkbox"
            value={_id}
            checked={complete}
            on:change={toggleComplete} />
        <button class="task__button" on:click={handleDelete}>
            <img src="./images/cancel.png" alt="Delete Task" />
        </button>
    </label>
</li>
