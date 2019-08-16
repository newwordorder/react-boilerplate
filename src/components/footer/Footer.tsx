import * as React from 'react';

import { Container } from 'components/container/Container';

import s from './Footer.scss';

interface IFooterProps {
  logo: React.ReactNode;
}

export const Footer = ({ logo }: IFooterProps) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
          {logo}
        </a>

        <ul className={s.footer__list}></ul>
      </div>
    </Container>
  </div>
);
