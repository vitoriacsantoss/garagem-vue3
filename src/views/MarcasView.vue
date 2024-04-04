<script setup>
import { ref, reactive, onMounted } from "vue";
import MarcaApi from "@/api/marcas";
const marcaApi = new MarcaApi();

const defaultMarca = { id: null, nome: "", nacionalidade: "" };
const marcas = ref([]);
const marcaAtual = reactive({ ...defaultMarca });

onMounted(async () => {
  marcas.value = await marcaApi.buscarTodasAsMarcas();
});

function limpar() {
  Object.assign(marcaAtual, { ...defaultMarca });
}

async function salvar() {
  if (marcaAtual.id) {
    await marcaApi.atualizarMarcas(marcaAtual);
  } else {
    await marcaApi.adicionarMarcas(marcaAtual);
  }
  marcas.value = await marcaApi.buscarTodasAsMarcas();
  limpar();
}

function editar(marcaParaEditar) {
  Object.assign(marcaAtual, marcaParaEditar);
}

async function excluir(id) {
  await marcaApi.excluirMarcas(id);
  marcas.value = await marcaApi.buscarTodasAsMarcas();
  limpar();
}
</script>

<template>
  <h1>Marcas</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="marcaAtual.nome" placeholder="Nome" />
    <input type="text" v-model="marcaAtual.nacionalidade" placeholder="Nacionalidade" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="item in marcas" :key="item.id">
      <span @click="editar(item)">
        ({{ item.id }}) - {{ item.nome }} - {{ item.nacionalidade }}
      </span>
      <button @click="excluir(item.id)">X</button>
    </li>
  </ul>
</template>

<style></style>