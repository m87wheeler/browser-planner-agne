<script>
</script>

<style type="text/scss">
    .container {
        display: grid;
        grid-template-columns: 1fr auto auto;
        column-gap: 0.5rem;
        padding: 0.5rem;
        background: #fff;

        a {
            display: flex;
            align-self: center;

            .img {
                width: 2.5rem;
                height: 2.5rem;

                &__logo {
                    width: 4rem;
                    height: 4rem;
                }

                &:hover {
                    opacity: 0.9;
                }
            }
        }
    }
</style>

<div class="container">
    <a href="https://blue-interiors.com">
        <img
            class="img img__logo"
            src="./images/primary-logo.png"
            alt="Blue Interiors" /></a>
    <a href="https://www.instagram.com/blueinteriorslondon/">
        <img
            class="img img__social"
            src="./images/instagram.png"
            alt="Instagram" /></a>
    <a href="https://www.facebook.com/blueinteriorslondon/">
        <img
            class="img img__social"
            src="./images/facebook.png"
            alt="Facebook" /></a>
</div>
