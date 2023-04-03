import router from './router/index.js';
import store from './store/index.js';

new Vue({
  name: 'MainApp',
  el: '#app',
  store: new Vuex.Store(store),
  router,
  template: `
    <div>
      <router-view></router-view>
    </div>
  `,
});
