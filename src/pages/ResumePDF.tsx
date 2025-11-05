import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
  },
  skill: {
    fontSize: 12,
    marginBottom: 5,
  },
});

function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Resume</Text>
          <Text style={styles.paragraph}>I am a passionate professional with expertise in modern web development and a strong focus on creating user-friendly applications.</Text>
          <Text style={styles.paragraph}>My experience includes working with cutting-edge technologies and frameworks to deliver high-quality solutions.</Text>
          <Text style={styles.paragraph}>I am committed to continuous learning and staying up-to-date with the latest industry trends and best practices.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Programming Skills</Text>
          <Text style={styles.skill}>Python</Text>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>TypeScript</Text>
          <Text style={styles.skill}>React</Text>
          <Text style={styles.skill}>Node.js</Text>
          <Text style={styles.skill}>CSS</Text>
        </View>
      </Page>
    </Document>
  );
}

export default ResumePDF;
