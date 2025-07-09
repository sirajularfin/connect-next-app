import React from 'react';
import Colors from '../../themes/colors';
import PixelScale from '../../themes/sizes';
import Container from '../container';
import Image from '../image';
import { FontVariant } from '../Typography/styles';
import Text from '../Typography/Typography';

interface IProps {
  username: string;
  profileImage?: string;
  message?: string;
  timestamp?: string;
}

const RecentChat: React.FC<IProps> = ({ ...props }) => {
  return (
    <Container
      display="flex"
      gap={PixelScale.XS_10}
      backgroundColor={Colors.GREY_50}
      borderBottomWidth={PixelScale.XS_1}
      borderColor={Colors.GREY_200}
      borderRadius={PixelScale.XS_10}
      margin={PixelScale.XS_10}
      padding={PixelScale.XS_10}
    >
      <Image
        src={props.profileImage}
        width={PixelScale.XL_50}
        height={PixelScale.XL_50}
        borderRadius={PixelScale.M_30}
      />
      <Container flex={1}>
        <Container
          alignItems="center"
          display="flex"
          justifyContent="space-between"
        >
          <Text variant={FontVariant.HeadingSmall} color={Colors.BLACK}>
            {props.username}
          </Text>
          <Text variant={FontVariant.LabelSmall} color={Colors.GREY_800}>
            {props.timestamp}
          </Text>
        </Container>
        <Text variant={FontVariant.BodyMedium} color={Colors.BLACK}>
          {props.message}
        </Text>
      </Container>
    </Container>
  );
};

export default RecentChat;
