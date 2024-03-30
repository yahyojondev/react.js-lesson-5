import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Bloginner from '../pages/bloginner/Bloginner';
import Careers from '../pages/careers/Careers';
import Contact from '../pages/contact/Contact';
import Privacy from '../pages/privacy/Privacy';

export const Routers = [
    {
        id:1,
        title:"Home",
        path:"/",
        elment:<Home/>
    },
    {
        id:2,
        title:"Blog",
        path:"/blog",
        elment:<Blog/>
    },
    {
        id:3,
        title:"Bloginner",
        path:"/bloginner",
        elment:<Bloginner/>
    },
    {
        id:4,
        title:"Careers",
        path:"/careers",
        elment:<Careers/>
    },
    {
        id:5,
        title:"Contact",
        path:"/contact",
        elment:<Contact/>
    },
    {
        id:6,
        title:"Privacy",
        path:"/privacy",
        elment:<Privacy/>
    },
]