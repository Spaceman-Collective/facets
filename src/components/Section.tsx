import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  style?: {};
  children: JSX.Element | JSX.Element[] | null;
};

export function Section({ title, style, children }: Props) {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.example}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({

  title: {
    textAlign: "left",
    color:"#7392FF",
    fontWeight:"bold",
  },
  example: {
    marginTop: 8,
  },
});
