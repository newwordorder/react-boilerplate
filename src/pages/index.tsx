import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { BlockText } from 'components/block-text/BlockText';
import { Image } from 'components/image/Image';
import { Video } from 'components/video/Video';

export default () => (
  <>
    <Helmet title="Home" />

    <Intro>This is some intro text.</Intro>

    <Image
      ratio="landscape"
      src="https://images.unsplash.com/photo-1561363702-e07252da3399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80"
    />

    <BlockText
      heading="Heading Schmedding"
      description={<>I am a paragraph.</>}
    />

    <Video
      ratio="landscape"
      placeholder="https://images.unsplash.com/photo-1561363702-e07252da3399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80"
      embed="7Z9rrryIOC4"
    />
  </>
);
