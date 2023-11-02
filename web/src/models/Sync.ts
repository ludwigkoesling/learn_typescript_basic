import axios, { AxiosPromise } from 'axios';

//http://localhost:3000/users

interface HasId {
  id: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  // handled by the calling class
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    // ES15 reconstruct
    const { id } = data;
    // returns a promise, which gives information
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
