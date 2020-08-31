import SunnyDialog from './SunnyDialog.vue'
import {createApp,h} from 'vue'


export const openDialog = (options)=>{
    const {title,content,ok,cancel} = options;
    const div = document.createElement('div');
    document.body.appendChild(div)
    const close = ()=>{
        // @ts-ignore
        app.unmount(div)
        div.remove()
    }

    const app = createApp({
        render(){
            return h(SunnyDialog,
            {
                    visible:true,
                    'onUpdate:visible':(newVisible)=>{ if(newVisible === false){close() } },
                    ok,
                    cancel
                    },
                {title,content}
                )
        }
    })
    app.mount(div)

}