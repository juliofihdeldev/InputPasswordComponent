import { render, screen, act } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

jest.mock('axios');



describe('App', () => {


  // test('fetches stories from an API and displays them', async () => {
    
  //   const stories = [
  //     { objectID: '1', title: 'Hello' },
  //     { objectID: '2', title: 'React' },
  //   ];
 
  //   const promise = Promise.resolve({ data: { hits: stories } });
 
  //   axios.get.mockImplementationOnce(() => promise);
 
  //   render(<App />);
 
  //   await userEvent.click(screen.getByRole('button'));
 
  //   await act(() => promise);
 
  //   expect(screen.getAllByRole('listitem')).toHaveLength(2);
  // });
  
  // test('fetches stories from an API and fails', async () => {
  //   axios.get.mockImplementationOnce(() =>
  //     Promise.reject(new Error())
  //   );
 
  //   render(<App />);
 
  //   await userEvent.click(screen.getByRole('button'));
 
  //   const message = await screen.findByText(/Something went wrong/);
 
  //   expect(message).toBeInTheDocument();
  // });



  test('Test sign in ', async () => {
    render(<App />);
 
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

  });


  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });



  test('renders testing in h1 ', () => {
    render(<App />);
    const titleh1Element = screen.getByText(/Testing react/i);
    expect(titleh1Element).toBeInTheDocument();
  });
});
 



