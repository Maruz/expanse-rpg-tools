/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';

const ExpanseToolsTeaser: FC = () => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <h1
        css={{
          margin: 0,
          marginTop: '30vh',
          fontFamily: '"Chathura", sans-serif',
          fontWeight: 400,
          fontSize: '4rem',
        }}
      >
        The Expanse RPG Tools
      </h1>
    </div>
  );
};

export const App: FC = () => {
  return <ExpanseToolsTeaser />;
};
