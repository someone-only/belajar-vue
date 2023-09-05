import { createApp } from "vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import Component from "./components/component-in-depth/registrations/global-registration/Component.vue";
import App from "./App.vue";

createApp(App).component("myComponent", Component).mount("#app");
