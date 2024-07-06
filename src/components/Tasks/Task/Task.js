// Task.js

import React, { useState } from 'react';
import { View, Text, Pressable, Modal, Switch, Alert, TextInput } from 'react-native';
import styles from './styles';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function Task(props) {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(props.task.description);

  const handleModalToggle = () => setShowModal(!showModal);

  const handleStatusChangePress = () => {
    props.onStatusChange(props.task.id);
    setShowModal(false);
  };

  const handleRemovePress = () => {
    Alert.alert(
      'Remove Task',
      'This action will permanently delete this task. This action cannot be undone!',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            props.onTaskRemoval(props.task.id);
            setShowModal(false);
          }
        }
      ]
    );
  };

  const handleEditPress = () => {
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    props.onUpdateTask(props.task.id, editedDescription, props.task.done);
    setEditMode(false);
    setShowModal(false);
  };

  return (
    <>
      <Pressable onPress={handleModalToggle}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.task.description}</Text>
          <Text style={styles.text}>Status: {props.task.done ? 'Completed' : 'Open'}</Text>
        </View>
      </Pressable>

      <Modal visible={showModal} transparent={true}>
        <View style={styles.modal.container}>
          <View style={styles.modal.box}>

            {/* Close Modal */}
            <Pressable onPress={handleModalToggle}>
              <View style={styles.close.container}>
                <AntDesign name="closesquare" size={25} color="#c00" />
              </View>
            </Pressable>

            
            {editMode ? (
              <TextInput
                style={styles.textInput}
                onChangeText={setEditedDescription}
                value={editedDescription}
                autoFocus={true}
              />
            ) : (
              <Text style={styles.title}>{props.task.description}</Text>
            )}

            <View style={styles.options}>
              {editMode ? (
                <Pressable onPress={handleSaveEdit}>
                  <Text style={styles.saveEdit}>Save</Text>
                </Pressable>
              ) : (
                <>
                  <Pressable onPress={handleEditPress}>
                    <Text style={styles.editLabel}>Edit</Text>
                  </Pressable>
                  <Switch
                    value={props.task.done}
                    onValueChange={handleStatusChangePress}
                  />
                  <Pressable onPress={handleRemovePress}>
                    <MaterialIcons name='delete-sweep' size={32} style={styles.remove.icon} />
                  </Pressable>
                </>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
