<template>
  <div class="h-full flex flex-col">
    <header class="w-full h-12 flex-shrink-0">
      <div class="w-4/5 mx-auto pt-2 mb-2">
        <a-input-search
          v-model="searchText"
          placeholder="请输入相关物"
          @clear="clearSearch"
          @change="search"
          allow-clear
          :style="{
            backgroundColor: 'hsl(var(--b1) / var(--tw-bg-opacity, 1))',
            color: 'hsl(var(--bc) / var(--tw-text-opacity, 1))',
          }"
          size="large"
          class="rounded-lg border-base-200"
        />
      </div>
    </header>
    <main class="w-4/5 mx-auto py-2 pb-16 flex-grow overflow-scroll">
      <a-space direction="vertical" fill size="large">
        <template v-for="(item, index) in res">
          <div class="card border rounded-xl border-base-300">
            <div class="card-body">
              <a-space direction="vertical" fill size="medium">
                <h4 class="card-title">{{ `第${index + 1}个合成` }}</h4>
                <div class="flex justify-between">
                  <div class="flex">
                    <template v-for="(i, ind) in item.input">
                      <div class="mx-1">
                        <span>{{
                          findItemById(craftMap.items, i.id).name
                        }}</span>
                        <span v-if="i.count > 1">*{{ i.count }}</span>
                      </div>
                      <span v-show="ind != item.input.length - 1">+</span>
                    </template>
                  </div>
                  <span>=</span>
                  <div class="flex">
                    <template v-for="(i, ind) in item.output">
                      <div class="mx-1">
                        <span>{{
                          findItemById(craftMap.items, i.id).name
                        }}</span>
                        <span v-if="i.count > 1">*{{ i.count }}</span>
                      </div>
                      <span v-show="ind != item.output.length - 1">+</span>
                    </template>
                  </div>
                </div>
              </a-space>
            </div>
          </div>
        </template>
      </a-space>
    </main>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref, getCurrentInstance } from "vue";
import craftMap from "@/assets/craftMap.json";
const search = () => {
  const str = searchText.value;
  if (!str) {
    currentInstance.$message.normal("已重置合成表");
    res.value = craftMap.table;
    return;
  }
  const item = findItem(craftMap.items, str!);
  if (!item) {
    currentInstance.$message.normal("未找到该物品");
    return;
  }
  currentInstance.$message.normal("查询成功");
  const id = item.id;
  res.value = craftMap.table.filter((item) => {
    if (item.input.find((i) => i.id == id)) return true;
    if (item.output.find((i) => i.id == id)) return true;
    return false;
  });
};
const currentInstance =
  getCurrentInstance()!.appContext.config.globalProperties;
const findItem = (arr: any, str: string) => {
  return arr.find((item: any) => item.name == str);
};
const findItemById = (arr: any, id: number) => {
  return arr.find((item: any) => item.id == id);
};
const res: Ref<Array<any>> = ref(craftMap.table);
const clearSearch = () => {
  res.value = craftMap.table;
};
const searchText = ref(null);
onMounted(() => {});
</script>
<style scoped></style>
