import { View, ScrollView } from 'react-native';
import Task from './Task/Task'; 
import styles from './styles'; 

export default function Tasks(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {props.tasks.map((task, index) => (
          <Task
            key={task.id} 
            task={task}
            onStatusChange={props.onStatusChange}
            onTaskRemoval={props.onTaskRemoval}
            onUpdateTask={props.onUpdateTask} 
          />
        ))}
      </ScrollView>
    </View>
  );
}
