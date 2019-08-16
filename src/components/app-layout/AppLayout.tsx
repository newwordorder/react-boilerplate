import * as React from 'react';
import Helmet from 'react-helmet';
import Logo from 'assets/svg/Logo.svg';
import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink name="Link 1" to="/about" />
      <HeaderLink name="Link 2" to="/about" />
      <HeaderLink name="Link 3" to="/about" />
      <HeaderLink name="Link 4" to="/about" />
      <HeaderLink name="Link 5" to="/about" />
    </Header>

    {children}

    <Footer logo={<Logo />} />

    {isDev && <Devtools />}
  </div>
);
