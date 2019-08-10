import { Vue, Component } from 'vue-property-decorator';

interface IPlatform {
  text: string;
  value: string;
}

@Component({
  name: 'Search'
})
export default class Search extends Vue {
  private streamId: null | number = null;

  public platforms: IPlatform[] = [
    {
      value: 'psn',
      text: 'Playstation'
    },
    {
      value: 'xbl',
      text: 'Xbox'
    },
    {
      text: 'Origin',
      value: 'Origin'
    }
  ];

  public platform: string = '';

  public gamerTag: string = '';

  validate(msg: string) {
    this.$store.dispatch('sendInvalidFeedback', msg);

    this.streamId = setTimeout(
      () => this.$store.dispatch('removeInvalidFeedback'),
      this.$store.getters.globalSnackbarTimeOut
    );
  }

  public onSubmit() {
    if (this.platform === '') {
      this.validate('Please enter gamer platform');
    } else if (this.gamerTag === '') {
      this.validate('Please enter gamer id');
    } else {
      this.$router.push({
        name: 'profile',
        params: {
          platform: this.platform,
          gamerTag: this.gamerTag
        }
      });
    }
  }

  public beforeCreate() {
    this.$store.dispatch('enableBodyBg');
  }

  public beforeDestroy() {
    clearTimeout(this.streamId!);
  }
}
