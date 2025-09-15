import { Image, View, StyleSheet } from 'react-native';

export function InfoCard({picture, title, subtitle, description}) {
  return (
    <View style={styles.card}>
        <Image 
            src={picture}
            alt='card-visual'
            style={style.image}
        />

        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 350,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, 
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 12,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2563eb", 
    marginBottom: 6,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#4b5563", 
    textAlign: "center",
  },
});