import Vue from 'vue'
import VueRouter from 'vue-router'
import Personal from './views/Personal.vue'
import Currency from './views/Currency.vue'
import Register from './views/Register.vue'
import Sign from './components/Lecture-sign.vue'
import Lecturecode from './components/Lecture-code.vue'
import Basic from './views/Basic.vue'
import Course from './views/Course.vue'
import Answer from './views/Answer.vue'
import Password from './components/Password.vue'
import Uploadfiles from './components/Upload-files.vue'
import Await from './components/Await.vue'
import Uploadmessage from './components/Upload-message.vue'
import Activity from './components/Activity.vue'
import ActivityTo from './components/Activity-to.vue'
import ActivityIn from './components/Activity-in.vue'
import ActivityPass from './components/Activity-pass.vue'
import Answertop from './components/Answer-top.vue'
import Answerquiz from './components/Answer-quiz.vue'
import Answerply from './components/Answer-reply.vue'
import Renzheng from './views/Renzheng.vue'
import Edit from './views/Edit.vue'
import Message from './views/Message.vue'
import Modify from './components/Modify.vue'


Vue.use(VueRouter)

const routes = [
    {path:'/',name:'register',component:Register,
    children:[{
        path:'sign',
        name:'sign',
        component:Sign
    },{
        path:'coad',
        name:'lecturecode',
        component:Lecturecode
    }]
},
    {path:'/personal',name:'personal',component:Personal,
    children:[{
        path:'',
        name:'currency',
        component:Currency
    },{
        path:'basic',
        name:'basic',
        component:Basic,
        children:[{
            path:'',
            name:'password',
            component:Password
        },{
            path:'renzheng',
            name:'renzheng',
            component:Renzheng
        },{
            path:'edit',
            name:'edit',
            component:Edit
        },
        {
            path:'message',
            name:'message',
            component:Message
        },{
            path:'modify',
            name:'modify',
            component:Modify
        }]
    },{
        path:'course',
        name:'course',
        component:Course,
        children:[{
            path:'',
            name:'uploadfiles',
            component:Uploadfiles
        },{
            path:'await',
            name:'await',
            component:Await
        },{
            path:'uploadmessage',
            name:'uploadmessage',
            component:Uploadmessage
        },{
            path:'activity',
            name:'activity',
            component:Activity,
            children:[{
                path:'',
                name:'activityTo',
                component:ActivityTo
            },{
                path:'activityin',
                name:'activityIn',
                component:ActivityIn
            },{
                path:'activitypass',
                name:'activityPass',
                component:ActivityPass
            }]
        }]
    },{
        path:'answer',
        name:'answer',
        component:Answer,
        children:[{
            path:'',
            name:'answertop',
            component:Answertop,
            children:[{
                path:'',
                name:'answerquiz',
                component:Answerquiz
            }]
        },{
            path:'reply',
            name:'answertop',
            component:Answertop,
            children:[{
                path:'',
                name:'answerply',
                component:Answerply
            }] 
        }]
    }]
}]

const router = new VueRouter({
    mode:'history',
    routes
})
export default router