<script>
    import Nested from './Nested.svelte';
    let count = {
      count: 0
    };
    function handleClick() {
        count.count += 1;
    }
</script>

<button on:click={handleClick}>
    Clicked {count.count} {count === 1 ? 'time' : 'times'}
</button>

<Nested answer={count}></Nested>
