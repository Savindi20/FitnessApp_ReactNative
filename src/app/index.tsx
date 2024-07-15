import { StyleSheet, Text, View, FlatList } from 'react-native';
import FoodListItem from '../components/FoodListItem';

const foodItems = [
  { label: 'Pizza', cal: 75, brand: 'Dominos' },
  { label: 'Apple', cal: 50, brand: 'Generic' },
  { label: 'Cooffe', cal: 60, brand: 'Americano' }
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <FoodListItem item={{ label: 'Pizza', cal: 75, brand: 'Dominos' }} />
      <FoodListItem item={{ label: 'Apple', cal: 50, brand: 'Generic' }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    gap: 5,
  },
});