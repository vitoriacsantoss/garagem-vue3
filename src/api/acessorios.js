import axios from "axios";
export default class AcessoriosApi {
  async buscarTodasAsAcessorios() {
    const { data } = await axios.get("/Acessorios/");
    return data.results;
  }
  async adicionarAcessorios(Acessorios) {
    const { data } = await axios.post("/Acessorios/", Acessorios);
    return data.results;
  }
  async atualizarAcessorios(Acessorios) {
    const { data } = await axios.put(`/Acessorios/${Acessorios.id}/`, Acessorios);
    return data.results;
  }
  async excluirAcessorios(id) {
    const { data } = await axios.delete(`/Acessorios/${id}/`);
    return data.results;
  }
}