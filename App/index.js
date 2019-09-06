import Index from '../page/index/index.js';
require('./App/style.css');
const template = require('./App/tpl.html');

export default {
  template,
  components: {
    Index
  },
  data() {
    return {
      num: 0
    };
  },
  methods: {
    loopNum(val) {
      this.num = val;
    }
  }
}