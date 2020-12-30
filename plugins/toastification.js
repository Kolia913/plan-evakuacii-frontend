import Vue from "vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
 
const options = {
    timeout: 2000,
    position: 'top-center'
};
 
 
Vue.use(Toast, options);