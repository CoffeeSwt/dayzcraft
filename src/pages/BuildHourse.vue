<template>
  <div class="h-full overflow-auto w-full flex flex-col items-center">
    <div class="md:w-4/5 w-5/6 py-4">
      <header class="flex justify-center items-center"></header>
      <main>
        <MdPreview :modelValue="mdText" class="bg-base-200 rounded-xl">
        </MdPreview>
      </main>
      <footer class="mt-4">
        <img src="@/assets/pic2.jpg" alt="" />
        <img src="@/assets/pic1.png" alt="" />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { ref } from "vue";

const mdText = ref("");
const getIntroduce = async () => {
  const response = await fetch(`/tutorial/buildhourse.md`);
  const text = await response.text();
  return text;
};
getIntroduce().then((res) => (mdText.value = res));
</script>
<style scoped>
.md-editor {
  --md-color: none;
}
</style>
