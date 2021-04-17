import React from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App(){
  
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello
          </p>

        </header>
      </div>
    );
  
}

export default withAuthenticator(App, true);