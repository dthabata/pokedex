import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Detail from '../pages/Detail';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/detail/:id" element={<Detail/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;
