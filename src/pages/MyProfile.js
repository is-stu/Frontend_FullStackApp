import React, { useState } from 'react';
import { connect } from 'react-redux';

const MyProfile = ({ displayName, email, uid }) => {
  const [name, setName] = useState(displayName);
  return (
    <section>
      <h1 className='title'>My Profile</h1>
      <input
        type='text'
        placeholder='Nombre'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input type='text' placeholder='Apellido' />
      <input
        type='email'
        placeholder='Correo Registro'
        value={email}
        readOnly
      />
      <input type='text' placeholder='Correo Visible' />
      <button type='submit' className='button'>
        Update Profile
      </button>
    </section>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.uid,
  email: state.auth.email,
  displayName: state.auth.displayName,
});

export default connect(mapStateToProps)(MyProfile);
