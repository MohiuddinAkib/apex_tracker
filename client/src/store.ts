import Vue from 'vue';
import Vuex, { StoreOptions, ActionContext } from 'vuex';
import Axios, { AxiosPromise, AxiosError, AxiosResponse } from 'axios';
import IProfile from '@/models/IProfile';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    enableBodyBg: false,
    invalidFeedback: '',
    showInvalidFeedback: false,
    globalSnackbarTimeOut: 6000,
    profileData: null
  },
  getters: {
    enableBodyBg: state => state.enableBodyBg,
    invalidFeedback: state => state.invalidFeedback,
    showInvalidFeedback: state => state.showInvalidFeedback,
    globalSnackbarTimeOut: state => state.globalSnackbarTimeOut,
    loading: state => state.loading,
    profileData: state => state.profileData
  },
  mutations: {
    enableBodyBg: context => (context.enableBodyBg = true),
    sendInvalidFeedback: (context, msg: string) => {
      context.invalidFeedback = msg;
    },
    showInvalidFeedback: (context, payload: boolean) => {
      context.showInvalidFeedback = payload;
    },
    setProfileData: (context, payload: any) => {
      context.profileData = payload;
    },
    handleLoading: (context, payload: boolean) => {
      context.loading = payload;
    },
    removeProfileData: context => (context.profileData = null)
  },
  actions: {
    enableBodyBg: context => context.commit('enableBodyBg'),
    showInvalidFeedback: (context, payload: boolean) =>
      context.commit('showInvalidFeedback', payload),
    sendInvalidFeedback: (context, msg: string) => {
      context.dispatch('showInvalidFeedback', true);
      context.commit('sendInvalidFeedback', msg);
    },
    removeInvalidFeedback: context => {
      context.dispatch('showInvalidFeedback', false);
      context.commit('sendInvalidFeedback', '');
    },
    handleLoading: (context, payload: boolean) => {
      context.commit('handleLoading', payload);
    },
    handleAxios: async (context: ActionContext<any, any>, route: string) => {
      context.dispatch('handleLoading', true);
      try {
        const response: AxiosResponse<any> = await Axios.get(route);

        context.dispatch('handleLoading', false);
        return response;
      } catch (error) {
        context.dispatch('handleLoading', false);
        context.dispatch('sendInvalidFeedback', error.message);
        setTimeout(
          () => context.dispatch('removeInvalidFeedback'),
          context.getters.globalSnackbarTimeOut
        );
      }
    },
    getProfileData: async (
      context: ActionContext<any, any>,
      payload: { platform: string; gamerTag: string }
    ) => {
      const response: AxiosResponse<{
        data: IProfile;
      }> = await context.dispatch(
        'handleAxios',
        `/api/v1/profile/${payload.platform}/${payload.gamerTag}`
      );

      if (response) {
        context.commit('setProfileData', response.data.data);
      }
    },
    removeProfileData: context => context.commit('removeProfileData')
  }
});
