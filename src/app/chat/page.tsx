// import Container from 'src/components/container';
// import RecentChat from 'src/components/recent-chat';
// import Text from 'src/components/text';
// import { FontVariant } from 'src/components/text/styles';
// import Colors from 'src/themes/colors';
// import PixelScale from 'src/themes/sizes';
// import ScreenLayout from '../../components/screen-layout';
// import styles from './styles';
// import useLogin from './chat.hook';

// function Chat(): React.ReactElement {
//   const { navigate, isDesktop } = useLogin();
//   const style = styles(isDesktop);

//   return (
//     <ScreenLayout styles={style.container}>
//       <Container
//         display="grid"
//         gap={20}
//         gridTemplateColumns="repeat(12, 1fr)"
//         height="100%"
//         gridGap={PixelScale.S_20}
//       >
//         <Container gridColumn="1/5">
//           <RecentChat
//             username="Elizabeth"
//             message="Nec eget tellus morbi placerat"
//             timestamp="2023-10-01 12:00"
//             profileImage="https://cdn.pixabay.com/photo/2023/11/20/11/11/ai-generated-8400902_1280.jpg"
//           />
//         </Container>
//         <Container gridColumn="5/-1" backgroundColor={Colors.WHITE}>
//           <Text variant={FontVariant.BodyLarge} color={Colors.GREY_800}>
//             Select a conversation to start messaging.
//           </Text>
//         </Container>
//       </Container>
//     </ScreenLayout>
//   );
// }

// export default Chat;
