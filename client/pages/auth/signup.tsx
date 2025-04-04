import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{message: string}[]>([]);

    const onSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/users/signup', {
                email,
                password
            });
    
            console.log(response.data);

        } catch(err: any) {
            setErrors(err.response.data.errors);
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            <div className='form-group'>
                <label>Email Address</label>
                <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control"></input>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" className="form-control"></input>
            </div>
            {errors.length > 0 && 
            <div className="alert alert-danger">
                <h4>Oops...</h4>
                <ul className="my-0">
                    { errors.map(err => <li key={err.message}>{err.message}</li> ) }
                </ul>
            </div>
            }
            
            <button className="btn btn-primary">Sign Up</button>
        </form>
    )
}