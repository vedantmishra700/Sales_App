import { StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/form";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/form/FormImagePicker";
import useLocation from "../hooks/useLocation";
import PickerItem from "../components/PickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "table-furniture",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "tshirt-crew",
  },
  {
    label: "Camera",
    value: 3,
    backgroundColor: "blue",
    icon: "camera",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: "dodgerblue",
    icon: "desktop-classic",
  },
  {
    label: "Cars",
    value: 5,
    backgroundColor: "tomato",
    icon: "car",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "gold",
    icon: "cricket",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "lightblue",
    icon: "music",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "orange",
    icon: "book",
  },
  {
    label: "Others",
    value: 9,
    backgroundColor: "yellowgreen",
    icon: "bookmark-outline",
  },
];

export default function ListingEditScreen() {
  const location = useLocation();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />

        <AppFormField
          maxLength={255}
          multiLine
          name="description"
          placeholder="Description"
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
});
