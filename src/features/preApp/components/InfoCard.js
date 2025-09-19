import { Image, View, Text, StyleSheet } from 'react-native';

export default function InfoCard({ title, subtitle, description, imageSource }) {
  return (
    <View style={styles.card}>
      <Image 
        source={typeof imageSource === "string" ? { uri: imageSource } : imageSource}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    maxWidth: 350,
    alignSelf: "center",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
    resizeMode: "cover",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 6,
    textAlign: "center",
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2563eb", 
    marginBottom: 12,
    textAlign: "center",
  },
  descriptionContainer: {
    backgroundColor: "#ffffff", 
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 50
  },
  description: {
    fontSize: 14,
    color: "#4b5563",
    textAlign: "center",
  },
});