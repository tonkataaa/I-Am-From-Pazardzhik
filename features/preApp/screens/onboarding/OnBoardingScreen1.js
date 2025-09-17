import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InfoCard from '../../components/InfoCard';


export default function OnBoardingScreen1() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Прескачане</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <InfoCard
          title={'Добре дошли в Аз съм от Пазарджик'}
          subtitle={'Вашият местен градски асистент'}
          description={'Открийте всичко важно за вашия град на едно място - събития, транспорт и местни бизнеси.'}
          imageSource={require('../../../../assets/e2a83b52-de37-49d0-97cb-faa8374e924a.png')}
        />

        {/* Next button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnBoardingSecond')}>
          <Text style={styles.txtBtn}> Напред </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF6FF', 
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'flex-end',
  },
  skipText: {
    color: '#6B7280', 
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5, 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827', 
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#3B82F6', 
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: '#374151', 
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#3B82F6', 
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 250
  },
  txtBtn: {
    color: 'white',
    fontSize: 15,
  }
});

