<script>
  export let data;
  console.log(data);
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
<h2>{data.date}</h2>
