import http from "../../components/common/http-common";

export const BASE_URL = "http://localhost:8080/customer";

class CustomerService {
  getAll() {
    return http.get("/getAll");
  }
  get(id) {
    return http.get(`/${id}`);
  }
  save(data) {
    return http.post("/save", data);
  }
  update( data) {
    return http.post(`/update`, data);
  }
  delete(id) {
    return http.delete(`/delete/${id}`);
  }
}

export default new CustomerService();
