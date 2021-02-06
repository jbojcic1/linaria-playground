import React, { Suspense } from 'react';
import { css } from '@linaria/core';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { A } from './A';
import { B } from './B';

// Since component C is lazy loaded it's linaria css will not be included
// in the first render. If we eagerly load it will
const C = React.lazy(() => import('./C'));

function App() {
  return (
    <Router>
      <header
        className={css`
          background: yellow;
          height: var(--box-size);
          width: var(--box-size);
        `}
      >
        <Link
          className={css`
            margin-right: 10px;
          `}
          to="/"
        >
          Page A
        </Link>
        <Link
          className={css`
            margin-right: 10px;
          `}
          to="/b"
        >
          Page B
        </Link>
        <Link
          className={css`
            margin-right: 10px;
          `}
          to="/c"
        >
          Page C
        </Link>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <A />
          </Route>
          <Route path="/b">
            <B />
          </Route>
          <Route path="/c">
            <C />
          </Route>
        </Switch>
      </Suspense>

    </Router>
  );
}

export default App;
