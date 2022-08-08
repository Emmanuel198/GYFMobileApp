import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { VStack, Text, Box } from 'native-base';
import { Center, Divider } from 'native-base';
import axios from 'axios';

//TODO Extraer los estilos a una hoja de estilos con css
const styles = StyleSheet.create({
    card: {
        textAlign: 'justify',
    },
    email: {
        marginTop: 5,
        marginBottom: 20,
        fontFamily: 'EncodeSans',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 25,
        color: '#f9842c',
        letterSpacing: -1,
        textAlign: 'justify',
    },
    content: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 25,
        color: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'justify',
    },
});

const baseUrl = 'https://jsonplaceholder.typicode.com' //TODO Extraer la url a un .env utilizando react-native-config

function CardExpandView(props) {
    const [comments, setComments] = useState([])

    const getComments = async () => {
        axios.get(`${baseUrl}/posts/${props.postId}/comments`).then((res) => {
            setComments(res.data);
        });
    }
    useEffect(() => {
        getComments();
    }, [])
    
    //TODO Crear un componente de carga
    return (
        <>
            <ScrollView>
                {Array.isArray(comments) ? comments.map((comment, index) => (
                    < Center key={index} >
                        <VStack w="90%" mx={2} mt={2} mb={3} style={styles.card}>
                            <Box>
                                <Text style={styles.email}>{comment.email}</Text>
                                <Text style={styles.content}>{comment.body}</Text>
                            </Box>
                        </VStack>
                        <Divider
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

export default CardExpandView;
