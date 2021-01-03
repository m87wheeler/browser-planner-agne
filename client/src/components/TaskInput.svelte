<script>
    import { clickOutside } from "../utils/functions";

    export let handleClick, inputActive;

    let task = "";
    const handleInput = (e) => (task = e.target.value);
    const handleKeyup = (e) => {
        if (e.keyCode === 13) {
            handleClick(task);
            task = "";
        }
    };
    const handleClickOutside = () => {
        handleClick(task);
        task = "";
    };
</script>

<style type="text/scss">
    .input {
        width: 100%;
        padding: 0.25rem;
        border: none;
        visibility: hidden;

        &--active {
            visibility: visible;
        }
    }
</style>

<input
    class="input"
    class:input--active={inputActive}
    type="text"
    placeholder="Task text..."
    value={task}
    on:input={handleInput}
    on:keyup={handleKeyup}
    use:clickOutside
    on:click_outside={handleClickOutside} />
