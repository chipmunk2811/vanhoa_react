import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Loader
import Loader from './pages/loader';

import HomeTemplate from './pages';
import Trangchu from './pages/trangchu';


// Phong Tục
import Phongtuc from './pages/phongtuc/phongtuc';
import Nguoiviet from './pages/phongtuc/nguoiviet';
import Nguoihoa from './pages/phongtuc/nguoihoa';
import Nguoicham from './pages/phongtuc/nguoicham';
import Nguoikhome from './pages/phongtuc/nguoikhome';
// Tín Ngưỡng
import Tinnguong from './pages/tinnguong/tinnguong';
import Thomau from './pages/tinnguong/thomau';
import Thothanhoang from './pages/tinnguong/thothanhoang';
import Thothantai from './pages/tinnguong/thothantai';


import Nghethuat from './pages/nghethuat/nghethuat';
import Cailuong from './pages/nghethuat/cailuong';
import Daocucham from './pages/nghethuat/daocucham';
import Daocuhoa from './pages/nghethuat/daocuhoa';
import Daocukhmer from './pages/nghethuat/daocukhmer';
import Hatboi from './pages/nghethuat/hatboi';


import Giaoduc from './pages/giaoduc/giaoduc';
import renderRoutes from './router';
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
          {/* HomeTemplate */}
          {/* <Route path='' element={<HomeTemplate />}>
            <Route index element={<Trangchu />} />
            <Route path='/phongtuc' element={<Phongtuc />} />
            <Route path='/phongtuc/nguoiviet' element={<Nguoiviet />} />
            <Route path='/phongtuc/nguoihoa' element={<Nguoihoa />} />
            <Route path='/phongtuc/nguoicham' element={<Nguoicham />} />
            <Route path='/phongtuc/nguoikhome' element={<Nguoikhome />} />

            <Route path='/tinnguong' element={<Tinnguong />} />
            <Route path='/tinnguong/thomau' element={<Thomau />} />
            <Route path='/tinnguong/thothanhoang' element={<Thothanhoang />} />
            <Route path='/tinnguong/thothantai' element={<Thothantai />} />

            <Route path='/nghethuat' element={<Nghethuat />} />
            <Route path='/nghethuat/cailuong' element={<Cailuong />} />
            <Route path='/nghethuat/daocucham' element={<Daocucham />} />
            <Route path='/nghethuat/daocuhoa' element={<Daocuhoa />} />
            <Route path='/nghethuat/daocukhmer' element={<Daocukhmer />} />
            <Route path='/nghethuat/hatboi' element={<Hatboi />} />

            <Route path='/giaoduc' element={<Giaoduc />} />
          </Route> */}

        </Routes>
      </BrowserRouter>
    </Suspense >
  );
}

export default App;
