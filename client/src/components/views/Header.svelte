<script>
</script>

<style type="text/scss">
    .header {
        display: grid;
        grid-template-columns: 0.5fr 1fr 0.5fr;
        column-gap: 1rem;
        align-items: center;
    }
</style>

<header class="header">
    <slot />
</header>
