import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Pressable, Box, VStack, HStack, Text } from 'native-base';
import axios from 'axios';

//TODO Extraer los estilos a una hoja de estilos con css
const styles = StyleSheet.create({
  card: {
    marginTop: 15,
  },
  name: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    letterSpacing: 1.5,
  },
  title: {
    fontFamily: 'EncodeSans',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    color: '#f9842c',
    letterSpacing: -1,
  },
  content: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 25,
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'justify',
  },
});

const baseUrl = 'https://jsonplaceholder.typicode.com'//TODO Extraer la url a un .env utilizando react-native-config

function CardPost(props) {
  const onPress = props.onPress;
  const option = props.option;
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    axios.get(`${baseUrl}/users/${option.userId}`).then((res) => {
      setUser(res.data);
    });
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <Pressable onPress={onPress}>
        <Box
          style={styles.card}>
          <VStack>
            <HStack>
              <Box w="95%" mx={1} mt={2} mb={3} >
                <Text style={styles.name} noOfLines={2}>
                  {user.name}
                </Text>
                <Text style={styles.title}>
                  {option.title}
                </Text>
                <Text style={styles.content}>
                  {option.body}
                </Text>
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Pressable>
    </>
  );
};
export default CardPost;