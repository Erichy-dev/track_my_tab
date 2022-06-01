import axios from 'axios'

export default () => {
  //create an axios object that's going to point us to our backend url
  return axios.create({
    //take note to use 127..... instead of localhost
    baseURL: "http://127.0.0.1:8081/", //so I spend hours trying to fix 404 caused by using "baseUrl" rather than baseURL
  })
}
