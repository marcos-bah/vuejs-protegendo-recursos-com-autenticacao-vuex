import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/http'

Vue.use(Vuex)

const estado = {
    token: null,
    usuario: {}
}

const mutations = {
    SET_LOGADO(state, {token, usuario}) {
        state.token = token
        state.usuario = usuario
    }, 
    SET_DESLOGADO(state) {
        state.token = null
        state.usuario = {}
    }
}

const actions = {
    login({commit}, usuario) {
        return new Promise((resolve, reject) => {
            http.post('auth/login', usuario)
                .then(response => {
                    commit('SET_LOGADO', {
                        token: response.data.access_token,
                        usuario: response.data.usuario
                        },
                    )
                    resolve(response.data)
                },
            ).catch(error => {
                        console.log(error);
                        reject(error)
                        },
                    )
                },
            );
    },
    logout({commit}) {
        commit('SET_DESLOGADO')
    }
}

export default new Vuex.Store({
    state: estado,
    mutations,
    actions
})