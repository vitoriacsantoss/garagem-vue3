import axios from "axios";
export default class CorApi {
  async buscarTodasAsCor() {
    const { data } = await axios.get("/Cor/");
    return data.results;
  }
  async adicionarCor(Cor) {
    const { data } = await axios.post("/Cor/", Cor);
    return data.results;
  }
  async atualizarCor(Cor) {
    const { data } = await axios.put(`/Cor/${Cor.id}/`, Cor);
    return data.results;
  }
  async excluirCor(id) {
    const { data } = await axios.delete(`/Cor/${id}/`);
    return data.results;
  }
}