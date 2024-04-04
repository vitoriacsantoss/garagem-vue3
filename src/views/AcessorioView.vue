<script setup>
import { ref, reactive, onMounted } from "vue";
import AcessoriosApi from "@/api/acessorios";
const acessoriosApi = new AcessoriosApi();

const defaultAcessorio = { id: null, descricao: "" };
const acessorios = ref([]);
const acessorio = reactive({ ...defaultAcessorio });

onMounted(async () => {
  acessorios.value = await acessoriosApi.buscarTodasAsAcessorios();
});

function limpar() {
  Object.assign(acessorio, { ...defaultAcessorio });
}

async function salvar() {
  if (acessorio.id) {
    await acessoriosApi.atualizarAcessorios(acessorio);
  } else {
    await acessoriosApi.adicionarAcessorios(acessorio);
  }
  acessorios.value = await acessoriosApi.buscarTodasAsAcessorios();
  limpar();
}

function editar(acessorioParaEditar) {
  Object.assign(acessorio, acessorioParaEditar);
}

async function excluir(id) {
  await acessoriosApi.excluirAcessorios(id);
  acessorios.value = await acessoriosApi.buscarTodasAsAcessorios();
  limpar();
}
</script>

<template>
  <h1>Acessórios</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="acessorio.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="item in acessorios" :key="item.id">
      <span @click="editar(item)">
        ({{ item.id }}) - {{ item.descricao }} -
      </span>
      <button @click="excluir(item.id)">X</button>
    </li>
  </ul>
</template>

<style></style>