import { AddBlog, Blogs, Error, Landing, Register } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { BlogDetail } from './pages/BlogDetail';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={<BlogDetail />} />
        <Route path='/blogs/add' element={<AddBlog />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};