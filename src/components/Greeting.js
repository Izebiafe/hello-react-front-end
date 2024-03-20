import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreeting } from '../store/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingMsg = useSelector((state) => state.greetings.greetingState);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div style={{
      textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f2f2f2',
    }}
    >
      <h1 style={{ fontSize: '2rem', color: 'blue' }}>Welcome to Our Page</h1>
      <p style={{ fontSize: '1rem', color: '#333' }}>
        {greetingMsg}
      </p>
    </div>
  );
};

export default Greeting;