import { useTranslations } from 'next-intl';
import React from 'react';

import { AttachmentIcon, RightArrowIcon } from '../../assets';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import classes from './ChatInput.module.scss';

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

const ChatInput: React.FC<IProps> = React.memo(({ value, onChange }) => {
  const t = useTranslations();

  const enterButton = () => (
    <Button type="submit" variant="PRIMARY" className={classes.sendButton}>
      <RightArrowIcon />
    </Button>
  );

  return (
    <div className={classes.container}>
      <AttachmentIcon />
      <TextInput
        id="chatInput"
        type="text"
        name="chatInput"
        placeholder={t('chat_input_placeholder')}
        customStyle={classes.textInput}
        value={value}
        onChange={e => onChange(e.target.value)}
        endIcon={enterButton()}
      />
    </div>
  );
});

ChatInput.displayName = 'ChatInput';

export default ChatInput;
