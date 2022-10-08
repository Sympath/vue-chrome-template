import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import './element-variables.scss'
Vue.use(ElementUI);
// global.browser = require('webextension-polyfill');

// Vue.prototype.$browser = global.browser;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#contentScript',
    render: h => h(App),
});