/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC, ImgHTMLAttributes } from 'react';

import { styles } from './Picture.styles';

export interface IPicture {
  src: string;
  alt: string;
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
}

export const Picture: FC<IPicture> = ({
  children,
  src,
  alt,
  imgProps,
  ...props
}) => {
  return (
    <picture css={styles.picture} {...props}>
      {children}
      <img src={src} alt={alt} {...imgProps} />
    </picture>
  );
};
