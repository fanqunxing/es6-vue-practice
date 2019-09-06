import './lib/vue.js';
import './src/require.js';
import App from './App/index.js';

new Vue({
  el: '#app',
  render: h => h(App)
});