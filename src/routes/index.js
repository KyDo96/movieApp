import HomePage from './../containers/HomeTemplate/HomePage'
import DetailPage from './../containers/HomeTemplate/DetailPage'
const routesHome=[
    {
        path:'/',
        exact:true,
        Component:HomePage,
    },
    {
        path:'/detail-film/:id',
        exact:false,
        Component:DetailPage,
    },
]

export {routesHome}