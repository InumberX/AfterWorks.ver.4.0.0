<template>
<section style="margin-top: 100px;">
INDEX：{{ this.$store.state.contents.index }}
ABOUT：{{ this.$store.state.contents.about }}
WORKS：{{ this.$store.state.contents.works }}
</section>
</template>

<script>
export default {
 head: {
  title: 'After Works.'
 }
}
</script>

<style>
</style>
