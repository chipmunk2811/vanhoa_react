import { lazy } from 'react';
import { Route } from 'react-router-dom';

const routes = [
    {
        path: "",
        element: lazy(() => import('./pages/index')),
        nested:
            [
                {
                    path: "",
                    element: lazy(() => import('./pages/trangchu')),
                },
                {
                    path: "/phongtuc",
                    element: lazy(() => import('./pages/phongtuc/phongtuc')),
                },
                {
                    path: "/phongtuc/nguoiviet",
                    element: lazy(() => import('./pages/phongtuc/nguoiviet'))
                },
                {
                    path: "/phongtuc/nguoihoa",
                    element: lazy(() => import('./pages/phongtuc/nguoihoa'))
                }
                ,
                {
                    path: "/phongtuc/nguoicham",
                    element: lazy(() => import('./pages/phongtuc/nguoicham'))
                }
                ,
                {
                    path: "/phongtuc/nguoikhome",
                    element: lazy(() => import('./pages/phongtuc/nguoikhome'))
                },
                {
                    path: "/tinnguong",
                    element: lazy(() => import('./pages/tinnguong/tinnguong'))
                },
                {
                    path: "/tinnguong/thomau",
                    element: lazy(() => import('./pages/tinnguong/thomau'))
                },
                {
                    path: "/tinnguong/thothanhoang",
                    element: lazy(() => import('./pages/tinnguong/thothanhoang'))
                },
                {
                    path: "/tinnguong/thothantai",
                    element: lazy(() => import('./pages/tinnguong/thothantai'))
                },
                {
                    path: "/nghethuat",
                    element: lazy(() => import('./pages/nghethuat/nghethuat'))
                },
                {
                    path: "/nghethuat/cailuong",
                    element: lazy(() => import('./pages/nghethuat/cailuong'))
                },
                {
                    path: "/nghethuat/daocucham",
                    element: lazy(() => import('./pages/nghethuat/daocucham'))
                },
                {
                    path: "/nghethuat/daocuhoa",
                    element: lazy(() => import('./pages/nghethuat/daocuhoa'))
                },
                {
                    path: "/nghethuat/daocukhmer",
                    element: lazy(() => import('./pages/nghethuat/daocukhmer'))
                },
                {
                    path: "/nghethuat/hatboi",
                    element: lazy(() => import('./pages/nghethuat/hatboi'))
                },
                {
                    path: "/giaoduc",
                    element: lazy(() => import('./pages/giaoduc/giaoduc'))
                }
            ]
    },{
        path: "/songnuoc",
        element: lazy(() => import('./pages/songnuoc/index')),
    }
];

const renderRoutes = () => {
    return (routes.map(route => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map(item => {
                        return <Route key={item.path} path={item.path} element={<item.element />} />
                    })}
                </Route>)
        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    }))
};
export default renderRoutes;