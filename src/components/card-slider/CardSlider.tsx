import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './BlockText.scss';

interface IBlockTextProps {
  heading: string;
  description: React.ReactNode;
  children: Array<React.ReactNode>;
}

export class CardSlider extends React.Component<IBlockTextProps, {}> {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <div className={s.cardslider}>
          <Row>
            <div className={s.cardslider__container}>
              {children.map(child => (
                <div className={s.cardslider__card}>{child}</div>
              ))}
            </div>
          </Row>
        </div>
      </Container>
    );
  }
}
