import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeachList from './pages/TeacherList';
import TeachForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" exact component={TeachList} />
      <Route path="/give-classes" exact component={TeachForm} />
    </BrowserRouter>
  )
}

export default Routes;