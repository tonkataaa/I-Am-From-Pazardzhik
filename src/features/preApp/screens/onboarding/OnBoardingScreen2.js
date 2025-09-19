import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InfoCard from '../../components/InfoCard';


export default function OnBoardingScreen2() {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Text style={styles.skipText}>Прескачане</Text>
            </TouchableOpacity>
        </View>

        {/* Main content */}
        <View style={styles.content}>
            <InfoCard
            title={'Събития и новини'}
            subtitle={'Никога не пропускайте нищо важно'}
            description={'Открийте концерти, театрални представления, спортни турнири и културни панаири във вашия град.'}
            imageSource={require('../../../../assets/icons/onboardingsecondPic.png')}
            />

        <View style={{ marginTop: 20, marginBottom: 30, width: '100%', alignItems: 'center' }}>
            <View style={styles.option}>
                <FontAwesome name='calendar' size={22} color="rgba(174, 5, 208, 1)" />
                <Text style={styles.optionText}>Календар със събития</Text>
            </View>

            <View style={styles.option}>
                <FontAwesome name='map-marker' size={22} color="rgba(174, 5, 208, 1)" />
                <Text style={styles.optionText}>Информация за мястото и времето</Text>
            </View>
      </View>

            {/* Next button */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnBoardingThird')}>
              <Text style={styles.txtBtn}> Напред </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
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
    marginTop: 100
  },
  txtBtn: {
    color: 'white',
    fontSize: 15,
  },
    option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    },
    optionText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
    },
});