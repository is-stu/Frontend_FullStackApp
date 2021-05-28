import React from 'react'
import { connect } from 'react-redux';

const MyProfile = ({dispatch,displayName}) => {
    console.log(displayName)
    return (
        <section>
            <h1 className='title'>My Profile</h1>
            <input type="text" placeholder='Nombre' value={displayName}/>
            <input type="text" placeholder='Apellido' />
            <input type="text" placeholder='Correo Registro' />
            <input type="text" placeholder='Correo Visible'/>
            <button type='submit' className='button'>Update Profile</button>
        </section>
    )
}

const mapStateToProps = (state) => ({
    userId: state.auth.uid,
    email: state.auth.email,
    displayName: state.auth.displayName
  });
  
  export default connect(mapStateToProps)(MyProfile);
