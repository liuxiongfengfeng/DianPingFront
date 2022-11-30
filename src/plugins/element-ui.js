import { Button, 
        Select,
        Row,
        Col,
        Card
     } from 'element-ui';
export default {
    install(Vue){ //插件必须包含 install 方法
        Vue.use(Button),
        Vue.use(Select),
        Vue.use(Row),
        Vue.use(Col),
        Vue.use(Card)
    }
}