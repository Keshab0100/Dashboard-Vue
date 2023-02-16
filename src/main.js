import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faMagnifyingGlass, faHouse, faComment, faToggleOn, faChartSimple, faRectangleList, faMessage, faChartPie, faSliders, faCalendarWeek, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faMagnifyingGlass, faHouse, faComment, faToggleOn, faChartSimple, faRectangleList, faMessage, faChartPie, faSliders, faCalendarWeek, faCaretDown)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
