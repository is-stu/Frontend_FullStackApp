import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { getUser, updateUser } from '../actions/authActions';
import { useHistory } from 'react-router-dom';

const MyProfile = ({ dispatch, email, userId, profile }) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: profile.name,
      lastName: profile.lastName,
      emailVisible: profile.alternativeEmail,
      email: email,
    },
  });
  const onSubmit = (data) => {
    data.userId = userId;
    console.log(data);
    updateUser(data);
    dispatch(getUser(userId));
    history.push(`/`);
  };

  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  return (
    <section>
      <h1 className='title'>My Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id='name'
          placeholder='Name'
          {...register('name', { maxLength: 30, required: true })}
        />
        <input id='lastName' {...register('lastName', { required: true })} />
        <input
          id='email'
          type='email'
          readOnly
          {...register('email')}
        />
        <input
          id='emailVisible'
          type='email'
          placeholder='Visible Email'
          {...register('emailVisible')}
        />
        <button type='submit' className='button'>
          Update Profile
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.uid,
  email: state.auth.email,
  profile: state.auth.profile,
});

export default connect(mapStateToProps)(MyProfile);
