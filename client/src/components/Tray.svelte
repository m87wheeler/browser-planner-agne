<script>
    export let cols = 3;
</script>

<style type="text/scss">
    .tray {
        display: grid;
        column-gap: 1rem;
    }
</style>

<div class="tray" style={`grid-template-columns: repeat(${cols}, 1fr)`}>
    <slot />
</div>
