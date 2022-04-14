import Balance from "./pages/Balance";
import Billing from "./pages/Billing";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import UnAuthenticated from "./pages/UnAuthenticated";


const routes=[
    {
        path:"home",
        component:Home
    },
    {
        path:"product",
        component:Product
    },
    {
        path:"balance",
        component:Balance
    },
    {
        path:'unauthenticted',
        component:UnAuthenticated
    },
    {
        path:'billing',
        component:Billing
    },
    {
        path:'cart',
        component:Cart
    }
]


export default routes