import { Image, View, Text } from 'react-native';

export default function EventCard() {
  return (
    <View>

        {/* Card image */}
        <Image
        
        />


        {/* Main text */}
        <View>
            <Text>Концерт на Симфоничен оркестър</Text>
            <Text>Музика</Text>
        </View>

        {/* Event info */}
        <View>
            <View>
                <Text>Calendar</Text>
                <Text>15 септември 2025</Text>             
            </View>

            <View>
                <Text>Clock</Text>
                <Text>19:00</Text>
            </View>

            <View>
                <Text>navigation</Text>
                <Text>Дворец на културата</Text>
            </View>

            {/* Description */}
            <View>
                <Text>Грандиозен концерт с класическа музика от световни композитори.</Text>
            </View>
        </View>
    </View>
  );
}
