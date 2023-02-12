import store from "@/store"
import http from "./http"
import { computed } from "vue"

const CategoryService = {
  async getAll() {
    return http
      .get("/category")
      .then((response) => {
        store.commit("CategoryModule/setData", response.data)
      })
      .catch((error) => error);
  },
}

export default CategoryService