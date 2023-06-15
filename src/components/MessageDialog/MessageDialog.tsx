import React, { FC } from 'react';
import { Dialog, Paragraph, Button, Portal } from 'react-native-paper';

interface MessageDialogProps {
  visible: boolean;
  message: string;
  onClose: () => void;
}

const MessageDialog: FC<MessageDialogProps> = ({ visible, message, onClose }) => {
  return (
    <Portal>
<Dialog visible={visible} onDismiss={onClose}>
      <Dialog.Content>
        <Paragraph>{message}</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onClose}>Close</Button>
      </Dialog.Actions>
    </Dialog>
    </Portal>
  );
};

export default MessageDialog;
