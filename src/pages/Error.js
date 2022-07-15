import { Link } from 'react-router-dom';
import notFound from '../assets/images/undraw_page_not_found_re_e9o6.svg';

export const Error = () => {
  return (
    <section>
      <div className='error'>
        <img src={notFound} alt='404' />
        <h3>Page not found...</h3>
        <Link to='/landing'>
          <button className='login-btn'>Back home</button>
        </Link>
      </div>
    </section>
  );
};
