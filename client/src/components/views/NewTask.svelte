<script>
    import { taskStore } from "../../stores/taskStore";

    // function to add task to database
    const updateDatabase = async (task) => {
        const req = await fetch("http://localhost:3000/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        const res = await req.json();
        return res;
    };

    // handle user input
    const handleInput = (e) => taskStore.taskInput(e.target.value);

    // handle submission
    const handleSubmit = async () => {
        const { success, message, _id } = await updateDatabase(
            $taskStore.taskModel
        );
        console.log(success, message, _id);
        if (success) {
            taskStore.addTask(_id);
            taskStore.disableInput();
        } else {
            alert(message);
        }
    };
</script>

<style type="text/scss">
    .new-task {
        height: 3rem;
        padding: 0.5rem 0;
        display: flex;
        justify-content: center;
        justify-self: center;

        &__container {
            height: 2rem;
        }
        &__input {
            justify-self: flex-end;
            height: inherit;
            min-width: 30rem;
            padding: 0 0.5rem;
            border: none;

            &:disabled {
                background: #ccc;
                color: #555;
                border: 1px solid #555;
                cursor: default;
            }
        }
        &__submit {
            justify-self: flex-start;
            height: inherit;
            width: 7rem;
            background: seagreen;
            color: #fff;
            border: 1px solid #fff;
            cursor: pointer;

            &:disabled {
                background: #ccc;
                color: #555;
                border: 1px solid #555;
                cursor: default;
            }
        }
    }
</style>

<div class="new-task">
    <div class="new-task__container">
        <input
            class="new-task__input"
            type="text"
            value={$taskStore.taskModel.task}
            placeholder="Task text..."
            on:input={handleInput}
            disabled={!$taskStore.enableInput}
            style="border: 1px solid #566573;" />
        <button
            class="new-task__submit"
            on:click={handleSubmit}
            disabled={!$taskStore.enableInput}>Add</button>
    </div>
</div>
