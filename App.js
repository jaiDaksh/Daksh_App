//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, Text, View, SafeAreaView, Alert } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
    <Text style={{margin:16, borderWidth:2, borderColor:'yellow', padding:10}}>Another piece of text</Text>
    <Text style={{margin:16, borderWidth:2, borderColor:'red', padding:15}}>Hello Daksh</Text>
 
      <Image source={{uri: 'https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk='}}  
       style={{width: 500, height: 500}} />  
    <Button
  onPress={() => Alert.alert('Simple Btton Pressed')}
  title="Press me"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/><Text>
  <Text>First part and </Text>
  <Text>second part</Text>
</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
