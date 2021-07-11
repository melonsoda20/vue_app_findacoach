import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default{
    mutations,
    actions,
    getters,
    state() {
        return {
            requests: []
        };
    },
    namespaced:true
};