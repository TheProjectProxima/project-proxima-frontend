import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useStore } from '../../store/index.store';
import { UserStore } from '../../store/user.store';
import { Button, Dialog, Portal } from 'react-native-paper';
import MessageDialog from '../../components/MessageDialog/MessageDialog';
import { User } from '../../lib/types/model';



export const SettingsScreen = ({ navigation }: {navigation:any}) => {

  const rooteStore = useStore()
  const userStore = rooteStore.userStore
  const user = userStore.user
  const authStore = rooteStore.authStore
  const linkStore = rooteStore.linkStore
  const friendStore = rooteStore.friendStore
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('')


  const showAndHideDialog = () => {
    setDialogVisible(true);
    setTimeout(() => {
      setDialogVisible(false);
    }, 2000)
  }


  const handleSignOut = () => {
    authStore.logout()
  }

  const handleDeleteAccount = () => {
    userStore.deleteUser(user.userId)
  }

  const handleUserUpdate = (updatedUser : User) => {
    userStore.updateUser(user.userId, updatedUser)
  }

  const handlePasswordChange = () => {
    const newUser = {...user}
    if (currentPassword === user.password && newPassword === confirmPassword) {
      newUser.password = newPassword
      handleUserUpdate(newUser)
      setDialogMessage('Updated Password Successfully')
      showAndHideDialog()
    }
    else {
      setDialogMessage('Error Updating Password. Please try again.')
      showAndHideDialog()
    }
  }

  const handleEmailChange = () => {
    try {
      const newUser = {...user}
    newUser.email = newEmail
    handleUserUpdate(newUser)
    setDialogMessage('Updated Email Successfully')
    showAndHideDialog()
    } catch (error) {
      setDialogMessage('Error Updating Email. Please try again.')
      showAndHideDialog()
    }
  }

  return (
    <View>
      <MessageDialog
        visible={dialogVisible}
        message={dialogMessage}
        onClose={showAndHideDialog}
      />
        <View>
          <Text>Username</Text>
        <Text>{user.userName}</Text>
        </View>
        <View>
        <Text>Change Password</Text>
        <TextInput
        label="Current Password"
        returnKeyType="done"
        value={currentPassword}
        onChangeText={(text:string) => setCurrentPassword(text)}
        secureTextEntry
      />
              <TextInput
        label="New Password"
        returnKeyType="done"
        value={newPassword}
        onChangeText={(text:string) => setNewPassword(text)}
        secureTextEntry
      />
              <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={confirmPassword}
        onChangeText={(text:string) => setConfirmPassword(text)}
        secureTextEntry
      />
      <Button mode="contained" onPress={handlePasswordChange}>
        Change Password
      </Button>
        </View>
        <View>
          <Text>Change Email</Text>
          <TextInput
        label="Email"
        value={newEmail}
        onChangeText={(text:string) => setNewEmail(text)}
        autoCapitalize="none"
        //autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

            <Button mode="contained" onPress={handleEmailChange}>
        Change Email
      </Button>
        </View>
        <View>
        <Button mode="contained" onPress={handleSignOut}>
        Sign Out
      </Button>
      <Button mode="contained" onPress={handleDeleteAccount}>
        Delete Account
      </Button>
        </View>
        
    </View>
  );
};

