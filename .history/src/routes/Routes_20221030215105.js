import Home from '../components/page/Home/Home';
import EVoucher from '../components/page/EVoucher/EVoucher';
import Khuyenmai from '../components/page/Khuyenmai/Khuyenmai';
import Thucdon from '../components/page/Thucdon/Thucdon';
import Donhang from '../components/page/Donhang/Donhang';
import Location from '../components/page/Location/Location';
import Pizza from '../components/page/Pizza/Pizza';
import Giohang from '../components/page/giohang/Giohang';
import Cuahang from '../components/page/Cuahang/Cuahang';
import Delivery from '../components/page/Delivery/Delivery';

const publicRoutes = [
    {path:'/', component:Home},
    {path:'/EVoucher', component:EVoucher},
    {path:'/Khuyenmai', component:Khuyenmai},
    {path:'/Thucdon', component:Thucdon},
    {path:'/Donhang', component:Donhang},
    {path:'/Cuahang', component:Cuahang},
    {path:'/Location', component:Location},
    {path:'/cart', component:Giohang}
    {path:'/delivery',component:Delivery}
]


const privateRoute = []

export {publicRoutes}