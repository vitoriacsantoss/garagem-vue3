import axios from "axios";
export default class MarcaApi {
  async buscarTodasAsMarcas() {
    const { data } = await axios.get("/Marca/");
    return data.results;
  }
  async adicionarMarcas(Marca) {
    const { data } = await axios.post("/Marca/", Marca);
    return data.results;
  }
  async atualizarMarcas(Marca) {
    const { data } = await axios.put(`/Marca/${Marca.id}/`, Marca);
    return data.results;
  }
  async excluirMarcas(id) {
    const { data } = await axios.delete(`/Marca/${id}/`);
    return data.results;
  }
}