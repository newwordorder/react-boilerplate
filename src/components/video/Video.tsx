import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';
import { Button } from 'components/button/Button';

import s from './Video.scss';

const getValue = (ratio: string) => {
  if (ratio === 'square') return '1 / 1';
  else if (ratio === 'portrait') return '4 / 6';
  else return '6 / 4';
};

interface VideoProps {
  placeholder: string;
  ratio: string;
  embed: string;
}

const VideoContainer = ({
  ratio,
  children,
}: {
  ratio: string;
  children: any;
}) => (
  <div
    className={s.video__container}
    style={{
      paddingBottom: `calc(100% / calc(${getValue(ratio)}))`,
    }}
  >
    {children}
  </div>
);

const VideoPlaceholder = ({ src }: { src: string }) => (
  <img className={s.video__placeholder} style={{}} src={src} />
);

const VideoButton = ({ onClick }: { onClick: () => void }) => (
  <Button className={s.video__videobutton} onClick={onClick}>
    Play
  </Button>
);

const VideoModal = ({
  visible,
  children,
}: {
  visible: boolean;
  children: object;
}) => (
  <div
    className={s.video__modal}
    style={{ display: `${visible ? 'block' : 'none'}` }}
  >
    {children}
  </div>
);

export class Video extends React.Component<VideoProps> {
  state = {
    isActive: false,
  };

  toggleModal = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const { ratio, placeholder, embed } = this.props;
    return (
      <Container>
        <div className={s.video}>
          <Row>
            <div className={s.video__col}>
              <div className={s.video__item}>
                <VideoContainer ratio={ratio}>
                  <VideoButton onClick={this.toggleModal} />
                  <VideoPlaceholder src={placeholder} />
                  <VideoModal visible={this.state.isActive}>
                    <iframe
                      className={s.video__video}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                      src={`https://www.youtube.com/embed/${embed}`}
                      frameBorder="0"
                    />
                  </VideoModal>
                </VideoContainer>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    );
  }
}
