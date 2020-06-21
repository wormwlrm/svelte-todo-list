<script>
  export let todoInput = "";
  export let onHandleKeyup;
  export let onHandleAdd;

  let placeholder = "할 일을 입력해주세요";
</script>

<div class="field has-addons">
  <div class="control" style="width: 100%;">
    <input
      class="input"
      type="text"
      {placeholder}
      on:keyup="{e => onHandleKeyup(e)}"
      bind:value="{todoInput}"
    />
  </div>
  <div class="control">
    <button class="button is-info" on:click="{() => onHandleAdd()}">
      추가하기
    </button>
  </div>
</div>
