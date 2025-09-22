import { View, Text, ScrollView ,TouchableOpacity, StyleSheet } from 'react-native';
import EventCard from '../components/EventCard';


export default function EventsScreen(){
return (
  <ScrollView>


      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Събития</Text>
            <Text style={styles.headerSubtitle}>2 събития днес</Text>
          </View>

        {/* Filter bar */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterBar}
          contentContainerStyle={{ flexDirection: 'row', alignItems: 'center' }}
        >
          {['Всички', 'Днес', 'Музика', 'Спорт', 'Театър'].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.chip,
                index === 0 ? styles.chipActive : styles.chipInactive,
              ]}
            >
              <Text
                style={index === 0 ? styles.chipTextActive : styles.chipTextInactive}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        </View>

        {/*Cards */}
        <EventCard
          title={'Концерт на Симфоничен оркестър'}
          category={'Музика'}
          date={'15 септември 2025'}
          time={'19:00'}
          place={'Дворец на културата'}
          description={'Грандиозен концерт с класическа музика от световни композитори.'}
        />
        <EventCard/>
        <EventCard/>
        

      </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,          
    paddingBottom: 14,      
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#0077cc',
    marginTop: 2,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    marginRight: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },

  // Filter bar
  filterBar: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  chip: {
    paddingHorizontal: 12,   
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 6,
  },
  chipActive: {
    backgroundColor: '#0066ff',
  },
  chipInactive: {
    backgroundColor: '#f0f0f0',
  },
  chipTextActive: {
    color: '#fff',
    fontSize: 13,            
    fontWeight: '500',
  },
  chipTextInactive: {
    color: '#333',
    fontSize: 13,
  },
});