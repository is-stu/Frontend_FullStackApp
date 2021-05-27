import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ children }) => (
  <section>
    <h1 className='title'>Home</h1>
    <p>Welcome to the little fullstack app</p>
    <p>You can log in with google or browse anonymously</p>
    <div>{children}</div>
    <Link to='/questions' className='button'>
      View Questions
    </Link>
  </section>
);
export default HomePage;
