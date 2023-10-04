<template>
  <div class="w-full h-full overflow-scroll">
    <div class="w-11/12 mx-auto py-2 pb-16 flex-grow">
      <div class="w-full my-3">
        <div class="badge badge-success">
          共有{{ modInfo.mods.length }}个模组
        </div>
      </div>

      <a-space direction="vertical" fill size="small">
        <template v-for="(item, index) in mods">
          <div class="collapse bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title">
              <div class="text-xl font-medium flex justify-between">
                <span>{{ item.name }}</span>
                <span>#{{ index + 1 }}</span>
              </div>
              <div class="mt-1 text-xs">{{ item.description }}</div>
            </div>
            <div class="collapse-content">
              <MdPreview
                :modelValue="item.info"
                class="bg-base-200"
              ></MdPreview>
            </div>
          </div>
        </template>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import modInfo from "@/assets/modInfo.json";

const getModInfo = async (modName: string) => {
  const response = await fetch(`/mods/${modName}.md`);
  const text = await response.text();
  return text;
};
const mods: Ref<any> = ref(modInfo.mods.map((mod) => mod));

onMounted(() => {
  mods.value.forEach(async (i: any) => {
    i.info = await getModInfo(i.name);
  });
});
</script>
<style scoped>
.md-editor {
  --md-color: none;
}
:deep(.md-editor-preview-wrapper) {
  padding: 0;
}
.collapse {
  visibility: visible !important;
}
</style>
