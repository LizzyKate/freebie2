import home from './components/page1/home';
import shop from './components/page 2/shop';
import cart from './components/page 3/cart'
import blog from './components/page 4/blog';
import info from './components/page 5/info';
import about from './components/page 6/about';
import questions from './components/additions/questions';


export default[
    {path:'/',component: home},
    {path:'/shop', name:'shop', component:shop},
    {path:'/cart/', component:cart},
    {path:'/cart/:id', component:cart},
    {path:'/blog', component:blog},
    {path:'/info', component:info},
    {path:'/about', component:about},
    {path:'/questions', component:questions}
]