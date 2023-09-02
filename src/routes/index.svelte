<script>
  import Editor from "tailwind-editor";
  import HtmlFormatter from "../components/HtmlFormatter.svelte";
  let html = "";
  let arr_html = [{ html: `Hello!`, klass: "p-2 text-4xl" }];
</script>

<svelte:head>
  <title>Tailwind Editor</title>
</svelte:head>
<div class="flex flex-row-reverse px-20 py-2">
  <a href="https://github.com/fouita/tailwind-editor" target="_blank">
    <img
      alt="github"
      src="https://img.icons8.com/fluent/32/000000/github.png"
    />
  </a>
</div>
<h1 class="text-center text-3xl font-bold">TW Editor</h1>
<div class="px-20 py-10 flex">
  <div class="flex-shrink-0 w-1/2">
    <Editor bind:html {arr_html} />
  </div>
  <HtmlFormatter str={html} />
</div>
