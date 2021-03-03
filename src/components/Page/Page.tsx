/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import cc from 'classcat';

import { SITE_NAME } from '../../utils/constants';

import { styles } from './Page.styles';

export interface IPage extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title: string;
}

export const Page: FC<IPage> = ({ children, id, title, ...props }) => {
  return (
    <div
      css={styles.page}
      className={cc({ page: true, [`${id}`]: Boolean(id) })}
      {...props}
    >
      <Helmet titleTemplate={`%s | ${SITE_NAME}`} defaultTitle={SITE_NAME}>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};
