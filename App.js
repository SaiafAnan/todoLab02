// App.js

import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import styles from './src/styles/main';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push, update, remove } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdqyNcgm9Nri5jE81LjlKQT9eoKdqgl28",
  authDomain: "todoapplab2.firebaseapp.com",
  projectId: "todoapplab2",
  storageBucket: "todoapplab2.appspot.com",
  messagingSenderId: "339829205055",
  appId: "1:339829205055:web:b2d9e6f6e45bed884eb08a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

// Creates the tab navigator object.
const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from Firebase Realtime Database on component mount
  useEffect(() => {
    const tasksRef = ref(database, 'tasks');
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const tasksArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setTasks(tasksArray);
      } else {
        setTasks([]);
      }
    });
  }, []);

  // Include a new task to the list and save to Firebase Realtime Database
  const handleAddTask = (taskDescription, taskDone) => {
    const newTaskRef = push(ref(database, 'tasks'));
    update(newTaskRef, {
      description: taskDescription,
      done: taskDone
    });
  }

  // Toggles the status of a task in the list and updates in Firebase Realtime Database
  const handleStatusChange = (id) => {
    const taskRef = ref(database, `tasks/${id}`);
    const currentTask = tasks.find(task => task.id === id);
    if (currentTask) {
      update(taskRef, {
        done: !currentTask.done
      });
    }
  }

  // Remove a task from the list and from Firebase Realtime Database
  const handleTaskRemoval = (id) => {
    const taskRef = ref(database, `tasks/${id}`);
    remove(taskRef);
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />

        <Tab.Navigator>
          <Tab.Screen name='List' options={{
            headerShown: false,
            title: 'List Tasks',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='list-ul' size={size} color={color} />
            )
          }}>
            {(props) => (
              <Tasks {...props} tasks={tasks} onStatusChange={handleStatusChange} onTaskRemoval={handleTaskRemoval} />
            )}
          </Tab.Screen>
          <Tab.Screen name='Add' options={{
            title: 'Add Task',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#008080'
            },
            tabBarIcon: ({ color, size }) => (
              <Entypo name='add-to-list' size={size} color={color} />
            )
          }}>
            {(props) => (
              <Form {...props} onAddTask={handleAddTask} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}
