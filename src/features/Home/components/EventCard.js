import { Image, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function EventCard({title, category, date, time, place, description}) {
  return (
    <View style={styles.card}>
      {/* Горна снимка */}
      <Image
        style={styles.image}
      />

      {/* Badge */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Препоръчано</Text>
      </View>

      {/* Съдържание */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>

        <View style={styles.row}>
          <Icon name="calendar" size={18} color="#555" />
          <Text style={styles.rowText}>{date}</Text>
        </View>

        <View style={styles.row}>
          <Icon name="clock-outline" size={18} color="#555" />
          <Text style={styles.rowText}>{time}</Text>
        </View>

        <View style={styles.row}>
          <Icon name="map-marker-outline" size={18} color="#555" />
          <Text style={styles.rowText}>{place}</Text>
        </View>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f4f4ff",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 150,
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#FFD700",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 12,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  category: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rowText: {
    marginLeft: 6,
    fontSize: 13,
    color: "#444",
  },
  description: {
    marginTop: 8,
    fontSize: 13,
    color: "#555",
  },
});