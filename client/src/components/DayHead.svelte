<script>
    import { formatDate } from "../utils/functions";
    export let day = "",
        date = "";
</script>

<style type="text/scss">
    .date {
        padding: 0.5rem 0;
        background: #fff;

        h2,
        h3 {
            text-align: center;
        }
        h2 {
            font-size: 1rem;
        }
        h3 {
            font-size: 0.75rem;
        }
    }
</style>

<div class="date">
    <h2>{day}</h2>
    <h3>{formatDate(date)}</h3>
</div>
