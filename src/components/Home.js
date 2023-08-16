import { StyleSheet, View } from "react-native";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { Text, Input, Button, ListItem, color } from '@rneui/base';
import { useState } from "react";

export default function Home(props) {

  const [buttonColor, setButtonColor] = useState(String(Math.floor(Math.random() * 100)));

  const renderedNames = props.names?.map((name, i) => {
    return <ListItem
      key={i}
      bottomDivider
      style={{ width: '100%' }}
      containerStyle={{ backgroundColor: '#0000' }}
      onLongPress={() => {
        props.removeName(i);
      }}
    >
      <ListItem.Chevron />
      <ListItem.Content>
        <ListItem.Title style={{ color: '#FED' }}>{name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>;
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(form, { resetForm }) => {
          console.log(form.name);
          props.addName(form.name);
          resetForm();
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
                marginTop: 40,
                paddingLeft: 5,
                backgroundColor: 'white'
              }}
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              renderErrorMessage={errors.name && touched.name}
              errorMessage={errors.name}
              errorStyle={{
                marginHorizontal: 5
              }}
            />
            <Button
              title="Add"
              size="lg"
              onPress={handleSubmit}
              buttonStyle={styles.button}
              titleStyle={{
                fontFamily: 'OlivessansPimiento',
                fontSize: 24
              }}
            >

            </Button>
          </>
        )}
      </Formik>
      {props.names.length > 0 &&
        <>
          {renderedNames}
          <Button
            buttonStyle={styles.button}
            title="Decide"
            titleStyle={{
              fontFamily: 'OlivessansPimiento',
              fontSize: 24
            }}
            onPress={props.decide}
          />
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLight: {
    color: '#FED',
    fontFamily: 'OlivessansPimiento',
    fontSize: 32,
    textShadowColor: '#0F0',
    textShadowRadius: 20,
    padding: 10
  },
  button: {
    marginTop: 10,
    padding: 25,
    paddingHorizontal: 25,
    borderRadius: 50,
    backgroundColor: '#495'
  }
});