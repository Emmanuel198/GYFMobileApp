import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Center, Divider } from 'native-base';
import CardPost from '../../components/CardPost';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const baseUrl = 'https://jsonplaceholder.typicode.com' //TODO Extraer la url a un .env utilizando react-native-config

function CardView() {
    const [cardObject, setCardObject] = useState(null);
    const navigation = useNavigation();

    const getPosts = async () => {
        axios.get(`${baseUrl}/posts`).then((res) => {
            setCardObject(res.data);
        });
    }

    useEffect(() => {
        getPosts();
    }, [])

    //TODO Crear un componente de carga
    return (
        <>
            <ScrollView>
                {Array.isArray(cardObject) ? cardObject.map((options, index) => (
                    < Center key={index} >
                        <CardPost
                            key={index}
                            option={options}
                            onPress={() => {
                                navigation.navigate('Comments', { option: options });
                            }}
                        />
                        <Divider
                            mt={3}
                            size={0.7}
                            width={'85%'}
                            backgroundColor={'rgba(176,176,176,0.58)'}
                        />
                    </Center>
                )) :
                    <Center>
                        <Text>Cargando</Text>
                    </Center>
                }
            </ScrollView>
        </>
    );
};
export default CardView;


