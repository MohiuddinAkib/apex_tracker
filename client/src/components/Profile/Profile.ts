import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  name: 'profile-show',
  computed: {
    ...mapGetters(['profileData', 'loading'])
  }
})
export default class Profile extends Vue {
  public beforeCreate() {
    this.$store.dispatch('enableBodyBg');
  }
}
