import axios from "axios";

const swapiGetter = (id: unknown) => {
  return axios
    .get(`https://swapi.dev/api/people/${id}/`)
    .then((res) => res.data.name)
    .catch((err) => console.error(err));
};

export default swapiGetter;
