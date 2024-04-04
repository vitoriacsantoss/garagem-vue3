<script setup>
import { ref, reactive, onMounted } from "vue";
import CorApi from "@/api/cores";
const corApi = new CorApi();

const defaultCor = { id: null, nome: "" };
const cores = ref([]);
const corAtual = reactive({ ...defaultCor });

onMounted(async () => {
  cores.value = await corApi.buscarTodasAsCor();
});

function limpar() {
  Object.assign(corAtual, { ...defaultCor });
}

async function salvar() {
  if (corAtual.id) {
    await corApi.atualizarCor(corAtual);
  } else {
    await corApi.adicionarCor(corAtual);
  }
  cores.value = await corApi.buscarTodasAsCor();
  limpar();
}

function editar(corParaEditar) {
  Object.assign(corAtual, corParaEditar);
}

async function excluir(id) {
  await corApi.excluirCor(id);
  cores.value = await corApi.buscarTodasAsCor();
  limpar();
}
</script>

<template>
  <h1>Cores</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="corAtual.nome" placeholder="Nome" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="item in cores" :key="item.id">
      <span @click="editar(item)">
        ({{ item.id }}) - {{ item.nome }} -
      </span>
      <button @click="excluir(item.id)">X</button>
    </li>
  </ul>
</template>

<style></style>