import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getItems() {
    return service
      .get("/items")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUsers() {
    return service
    .get('/user')
    .then((res) => res.data)
    .catch(errorHandler);
  },

  getOneUser(data) {
    return service
    .get(`/user/${data}`, data)
    .then((res) => res.data)
    .catch(errorHandler);
  },

  updateOneUser(data) {
    return service
    .patch(`/user/${data}`, data)
    .then((res) => res.data)
    .catch(errorHandler);
  },

  deleteOneUser(data) {
    return service
    .delete(`/user/${data}`, data)
    .then((res) => res.data)
    .catch(errorHandler);
  },

  getRecipes () {
    return service
    .get('/recipes')
    .then((res) => res.data)
    .catch(errorHandler);
  },

  getOneRecipe (data) {
    return service
    .get(`/recipes/${data}`, data)
    .then((res) => res.data)
    .catch(errorHandler);
  },

  getIngredients () {
    return service
    .get('/ingredients')
    .then((res) => res.data)
    .catch(errorHandler);
  }


  
};
