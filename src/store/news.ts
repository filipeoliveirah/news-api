import { createStore } from 'vuex';

const endpoint = 'https://newsapi.org/v2/everything'
const apiKey = '7920feda06b04939a390cddc367fc1be'

type StateType = {
  news: NewsType[],
}

type ArticlesType = {
  source: SourceType,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: Date,
  content: string,
}

type SourceType = {
  id: null,
  name: string,
}

type NewsType = {
  status: string,
  totalResults: number,
  articles: ArticlesType[],
}

export default createStore({
  state: (): StateType => ({
    news: []
  }),
  getters: {
    getterNews: state => state.news
  },
  actions: {
    async fetchNews({ commit }){
      const response = await fetch(endpoint + '?q=tesla&from=2023-07-04&sortBy=publishedAt&apiKey=' + apiKey)
      const newsResp = await response.json()
      commit('SET_NEWS', newsResp)
    }
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news
    }
  }
})
