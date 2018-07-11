import Index from '../page/home'
import Message from '../page/message'
import User from '../page/user'

const routers=[
    {
      path:'/index',
      exact:true,
      component:Index,
    },
    {
        path:'/message',
        exact:true,
        component:Message,
    },
    {
        path:'/user',
        exact:true,
        component:User,
    }
];

export default routers