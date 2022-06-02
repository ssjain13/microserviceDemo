const BASE_URL = "http://localhost:8080/customer";

export const getAllCustomers = async () => {
  try {
    const res = await fetch(BASE_URL + "/getAll");
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const deleteCustomer = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/delete/${id}`, {
      method: "DELETE",
    });
    return res.json;
  } catch (err) {
    console.log(err);
  }
};

export const saveOrUpdateCustomer = async (customer, action) => {
  try {
    const payload = JSON.stringify(customer);
    const res = await fetch(`${BASE_URL}/${action}`, {
      body: payload,
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    return res.json;
  } catch (err) {
    console.log(err);
  }
};
