import { useTranslations } from 'next-intl';
import React from 'react';

import { AttachmentIcon } from '../../assets';
import TextInput from '../TextInput/TextInput';
import classes from './ChatInput.module.scss';

interface IProps {}

const ChatInput: React.FC<IProps> = () => {
  const t = useTranslations();

  return (
    <div className={classes.container}>
      <AttachmentIcon />
      <TextInput
        id="chatInput"
        type="text"
        name="chatInput"
        placeholder={t('chat_input_placeholder')}
        customStyle={classes.textInput}
      />
    </div>
  );
};

export default ChatInput;
