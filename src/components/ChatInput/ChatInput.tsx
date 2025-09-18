'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { AttachmentIcon, RightArrowIcon } from '@/assets';
import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import classes from './ChatInput.module.scss';

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

const ChatInput: React.FC<IProps> = React.memo(({ value, onChange }) => {
  const t = useTranslations();

  const enterButton = React.useCallback(
    () => (
      <Button type="submit" variant="PRIMARY" className={classes.sendButton}>
        <RightArrowIcon />
      </Button>
    ),
    []
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    []
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
        onChange={handleChange}
        endIcon={enterButton()}
      />
    </div>
  );
});

ChatInput.displayName = 'ChatInput';

export default ChatInput;
