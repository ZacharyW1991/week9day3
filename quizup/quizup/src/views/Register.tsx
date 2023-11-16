import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import UserType from '../types/auth';

type RegisterProps = {
}

export default function Register({}: RegisterProps) {
  const navigate = useNavigate();

  const [userFormData, setUserFormData] = useState<UserType>(
      {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
      }
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setUserFormData({...userFormData, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = (e: React.FormEvent): void => {
      e.preventDefault();
      navigate('/');
  }

  return (
    <>
          <h1 className="text-center">Register</h1>
            <Card className='mt-3'>
                <Card.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Label htmlFor='firstName'>First Name</Form.Label>
                        <Form.Control value={userFormData.firstName} name='firstName' onChange={handleInputChange} />

                        <Form.Label htmlFor='lastName'>Last Name</Form.Label>
                        <Form.Control value={userFormData.lastName} name='lastName' onChange={handleInputChange} />

                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control value={userFormData.email} name='email' type='email' onChange={handleInputChange} />

                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control value={userFormData.password} name='password' type='password' onChange={handleInputChange} />

                        <Button type='submit' variant='outline-success' className='w-100 mt-3'>Register</Button>
                    </Form>
                </Card.Body>
            </Card>
    </>
  )
}