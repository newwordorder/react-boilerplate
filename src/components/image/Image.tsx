import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './Image.scss';

const getValue = (ratio: string) => {
  if (ratio === 'square') return '1 / 1';
  else if (ratio === 'portrait') return '4 / 6';
  else return '6 / 4';
};

interface ImageProps {
  src: string;
  ratio: string;
}

export const Image = ({ src, ratio }: ImageProps) => {
  return (
    <Container>
      <div className={s.image}>
        <Row>
          <div className={s.image__col}>
            <div className={s.image__item}>
              <div
                className={s.image__container}
                style={{
                  paddingBottom: `calc(100% / calc(${getValue(ratio)}))`,
                }}
              >
                <img className={s.image__image} style={{}} src={src} />
              </div>
            </div>
          </div>
        </Row>
      </div>
    </Container>
  );
};
