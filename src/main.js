import { createApp } from 'vue'
import Home from "./views/Home.vue";
import News from "./views/News.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
//createApp.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//createApp.use(IconsPlugin)

const url = new URL(location.href);
let app = Home;
if (url.pathname.indexOf('test') >= 0) {
    app = News;
}
createApp(app).mount('#app')//.use(BootstrapVue)
