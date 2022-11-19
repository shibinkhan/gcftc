import React from 'react';
import app from './Firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

function useFirebase() {
    return (
        <div>
            
        </div>
    )
}

export default useFirebase;
