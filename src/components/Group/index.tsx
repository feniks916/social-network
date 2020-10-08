import React, { ReactElement } from 'react';
import Group from './Group';
import PageWrapper from '../../common/pageWrapper';

const WrappedGroup : React.FC = () : ReactElement => (
  <PageWrapper>
    <Group />
  </PageWrapper>
);

export default WrappedGroup;
