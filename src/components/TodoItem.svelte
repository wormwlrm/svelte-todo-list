<script>
  export let todo;
  export let onHandleCheck;
  export let onHandleRemove;
  export let onHandleModify;

  let placeholder = "할 일을 입력해주세요";
</script>

<style lang="scss">
  .control.has-icons-left,
  .control.has-icons-right {
    & .icon {
      pointer-events: inherit;
      transition: color 0.5s;
      cursor: pointer;

      &:hover {
        color: #363636;
      }
    }

    & .input:focus ~ .icon {
      color: #dbdbdb;
    }
  }

  .todo-item {
    &--checked {
      opacity: 0.4;
    }
  }
</style>

<div class="field">
  <div
    class="control has-icons-left has-icons-right todo-item"
    class:todo-item--checked="{todo.checked}"
  >
    <input
      class="input"
      type="text"
      {placeholder}
      bind:value="{todo.text}"
      on:keyup="{e => onHandleModify(todo.id, e.target.value)}"
    />
    <span
      class="icon is-small is-left"
      on:click="{() => onHandleCheck(todo.id)}"
    >
      <i class="fas fa-check"></i>
    </span>
    <span
      class="icon is-small is-right"
      on:click="{() => onHandleRemove(todo.id)}"
    >
      <i class="fas fa-trash"></i>
    </span>
  </div>
</div>
