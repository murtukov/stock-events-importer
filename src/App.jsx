// eslint-disable-next-line import/no-extraneous-dependencies
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import React, { useState } from 'react';
import {
  Button, ControlGroup, InputGroup, TextArea,
} from '@blueprintjs/core';
import styles from './App.module.css';

function App() {
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [data, setData] = useState('');

  const handleInput = (setter) => (e) => {
    setter(e.currentTarget.value);
  };

  return (
    <ControlGroup vertical className={styles.root}>
      <InputGroup
        placeholder="User ID"
        value={userId}
        onInput={handleInput(setUserId)}
      />
      <InputGroup
        placeholder="Auth token"
        value={token}
        onInput={handleInput(setToken)}
      />
      <TextArea onInput={handleInput(setData)} value={data} />
      <Button text="Import" intent="primary" />
    </ControlGroup>
  );
}

export default App;
