import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import InputDemo  from "./components/InputDemo.vue";
import FormDemo  from "./components/FormDemo.vue";
import MenuDemo from "./components/MenuDemo.vue";
import intro from "./components/intro.vue";
import ColorDemo from "./components/ColorDemo.vue";
import CardDemo from "./components/CardDemo.vue";

// import DatePickerDemo from './components/DatePickerDemo.vue'

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "input", component: InputDemo},
        { path: "Form", component: FormDemo},
        { path: "menu", component: MenuDemo},
        { path: "intro", component:intro},
        { path: "color", component:ColorDemo},
        { path: "card", component:CardDemo}
        // { path: "datepicker", component: DatePickerDemo},
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});
