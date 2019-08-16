import * as React from 'react';

import { Link } from 'components/link/Link';
import { Button } from 'components/button/Button';
import Logo from 'assets/svg/Logo.svg';

import s from './Header.scss';

interface HeaderProps {
  children: React.ReactNode;
}

type State = {
  isDesktop: boolean;
};

const DesktopHeader = ({ children }: HeaderProps) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link to="/" className={s.header__logo}>
          <Logo className={s.header__logoSvg} />
          <div className={s.header__logoText}>An absolute snack.</div>
        </Link>
        <div className={s.header__navigation}>{children}</div>
      </div>
    </div>
  </header>
);

class MobileHeader extends React.Component<HeaderProps, { isOpen: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { isOpen: false };
    this.Toggle = this.Toggle.bind(this);
  }

  Toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <header className={s.headermobile}>
          <div className={s.headermobile__container}>
            <div className={s.headermobile__content}>
              <Link to="/" className={s.headermobile__logo}>
                <Logo className={s.headermobile__logoSvg} />
              </Link>
              <Button onClick={this.Toggle}>Menu</Button>
            </div>
          </div>
        </header>
        <div
          className={s.headermobile__drawer}
          style={{
            transform: `translateX(${this.state.isOpen ? '0%' : '100%'})`,
          }}
        >
          <div className={s.headermobile__navigation} onClick={this.Toggle}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export class Header extends React.Component<HeaderProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isDesktop: false,
    };

    this.Update = this.Update.bind(this);
  }
  componentDidMount() {
    this.Update();
    window.addEventListener('resize', this.Update);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.Update);
  }

  Update() {
    this.setState({ isDesktop: window.innerWidth >= 768 });
  }

  render() {
    const { isDesktop } = this.state;
    const { children } = this.props;
    return (
      <div
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 4,
          top: 0,
        }}
      >
        {isDesktop ? (
          <DesktopHeader>{children}</DesktopHeader>
        ) : (
          <MobileHeader>{children}</MobileHeader>
        )}
      </div>
    );
  }
}
