import { StyleSheet, View } from "react-native";

import { useState } from "react";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { Text, Input, Button, ListItem, color } from '@rneui/base';

export default function Home(props) {

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={e => {
        console.log(e.name);
        alert(e.name);
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, 'Name must have at least 2 letters')
          .max(20, 'Name is too long, must not be over 20 letters')
          .required('Can\'t be blank')
      })}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <>
          <Text style={styles.textLight}>Who pays the bill?</Text>
          <Input
            placeholder="Enter name"
            leftIcon={{ type: 'font-awesome', name: 'user-plus' }}
            inputContainerStyle={{
              marginHorizontal: 5,
              marginTop: 5,
              paddingLeft: 5,
              backgroundColor: 'white'
            }}
            name='name'
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
          />
          <Button
            title="Add"
            onPress={handleSubmit}
          >

          </Button>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  textLight: {
    color: '#FED'
  }
});