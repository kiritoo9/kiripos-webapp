<script lang="ts">
    import { page } from '$app/stores';

    async function getData(params:any) {
        await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
            return [];
        });
        console.log(params)
    }

    let slug = $page.params.slug
</script>

<h1>This blog with title: {slug}</h1>
<a href="/">Back to home</a> || <button on:click={() => getData("params")}>Get Data</button>