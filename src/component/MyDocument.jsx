import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const MyDocument = ({ data }) => (
  <Document>
    <Page >
      <View>
        {data.map((item,i) => (
             <Text key={item._id}>
             {i + 1}. name: {item.name} - email: {item.email} - deadline: {item.application_deadline} - salary: {item.salary_range}
           </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;