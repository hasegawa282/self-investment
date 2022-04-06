import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import SiDocument from 'components/molecules/SiDocument';
import Homes from 'pages/Homes';

function App() {
  return (
    <Authenticator hideSignUp>
      {({ signOut, user }) => (
        <SiDocument>
          <Homes />
          <button onClick={signOut}>signOut</button>
        </SiDocument>
        
      )}
    </Authenticator>
  );
}

export default App;