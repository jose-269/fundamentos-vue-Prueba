import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Vuex from "vuex"
import Getters from "@/views/Home.vue";

const localVue = createLocalVue()
localVue.use(Vuex)

describe("Vista Home", () => {

  let getters;
  let store;
  beforeEach(() => {
    getters: {
      productosFiltrados: ;
    }
    
    store = new Vuex.Store({
      getters
    })
  })
  
  stub: ["getters"],
  test("Presencia de Título", () => {
    const wrapper = shallowMount(Home, Getters, {store, localVue});
    const h1 = wrapper.find("h1");
    const titulo = "Pizzería <em>Maestra</em>";
    expect(h1.text()).toBe(titulo)
  })
})