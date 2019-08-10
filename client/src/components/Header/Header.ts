import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Header'
})
export default class Header extends Vue {
  public image: string = require('@/assets/logo.png');
}
