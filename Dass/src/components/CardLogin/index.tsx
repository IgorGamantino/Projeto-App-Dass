import { useLinkProps } from '@react-navigation/native';
import React from 'react';

interface propsChildren {
  children: string;
}

import { Card, LabelCard, LabelText } from './styles';

const CardLogin: React.FC = ({children}) => {
return(
  <>
    <LabelCard >
      <LabelText>TS DASS</LabelText>

    </LabelCard>
    <Card>{children}</Card>
  </>
)};

export default CardLogin;
