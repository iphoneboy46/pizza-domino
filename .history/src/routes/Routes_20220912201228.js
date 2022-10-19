import Home from '../components/page/Home/Home';
import EVoucher from '../components/page/EVoucher/EVoucher';
import Khuyenmai from '../components/page/Khuyenmai/Khuyenmai';
import Thucdon from '../components/page/Thucdon/Thucdon';
import Donhang from '../components/page/Donhang/Donhang';
import Location from '../components/page/Location/Location';
import Pizza from '../components/page/Pizza/Pizza';

const publicRoutes = [
    {path:'/', component:Home},
    {path:'/EVoucher', component:EVoucher},
    {path:'/Khuyenmai', component:Khuyenmai},
    {path:'/Thucdon', component:Thucdon},
    {path:'/Donhang', component:Donhang},
    {path:'/Location', component:Location},
]


const privateRoute = []

export {publicRoutes}