<script>
    import { taskStore } from "../../stores/taskStore";

    // template for new task
    let task = {
        _id: "",
        task: "",
        type: "todo",
        // date: date.toISOString(),
        date: new Date(),
        complete: false,
    };

    // function to add task to database
    const updateDatabase = async () => {
        const req = await fetch("http://localhost:3000/create", {
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
    const handleInput = (e) => (task.task = e.target.value);

    // handle submission
    const handleSubmit = async () => {
        const { success, message, _id } = await updateDatabase();
        if (success) {
            taskStore.addTask({ ...task, _id });
            task = { _id: "", task: "", type: "todo", date, complete: false };
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

        &__container {
            height: 2rem;
        }
        &__input {
            justify-self: flex-end;
            height: inherit;
            min-width: 30rem;
            padding: 0 0.5rem;
            border: none;
        }
        &__submit {
            justify-self: flex-start;
            height: inherit;
            width: 7rem;
            background: seagreen;
            color: #fff;
            border: 1px solid #fff;
            cursor: pointer;
        }
    }
</style>

<div class="new-task">
    <div class="new-task__container">
        <input
            class="new-task__input"
            type="text"
            value={task.task}
            placeholder="Task text..."
            on:input={handleInput} />
        <button class="new-task__submit" on:click={handleSubmit}>Add</button>
    </div>
</div>
