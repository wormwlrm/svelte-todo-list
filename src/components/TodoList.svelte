<script>
  import TodoItem from "./TodoItem.svelte";

  export let todos;
  export let onHandleCheck;
  export let onHandleRemove;
  export let onHandleModify;

  $: remaining = todos.filter(t => !t.checked).length;
</script>

<style lang="scss">

</style>

<div>
  {#if remaining}
    <p>남은 일이 {remaining}개 남았어요</p>
  {:else}
    <p>남은 일이 없어요</p>
  {/if}
  <br />
  {#each todos as todo (todo.id)}
    <TodoItem {todo} {onHandleCheck} {onHandleRemove} {onHandleModify} />
  {/each}
</div>
