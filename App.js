import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
const DATA =[
  {
    id:'1',
    title: 'Có người muốn nhắn tin cho bạn',
    content :'phuc......... lúc 01/08/2025 9:01',
    time :'20/09/2026 ,03:40',
    type :'check',
  },
  {
    id:'2',
    title: 'Bạn có 1 thông báo mới',
    content :'hello world 02/09/2025 9:01',
    time :'20/10/2026 ,04:40',
    type :'user',
  },
  {
    id:'3',
    title: 'Có người muốn nhắn tin cho bạn',
    content :'nhat............. lúc 01/08/2025 9:01',
    time :'20/09/2026 ,03:40',
    type :'check',
  },
  {
    id:'4',
    title: 'Bạn có 1 thông báo mới',
    content :'có đồ ăn đến 02/09/2025 9:02',
    time :'20/10/2026 ,04:40',
    type :'user',
  },
  {
    id:'5',
    title: 'Bạn có 1 thông báo mới',
    content :'chao ban nhe  02/09/2025 9:01',
    time :'20/10/2026 ,04:40',
    type :'check',
  },
];
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>THÔNG BÁO</Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              (item.id === '1' || item.id === '3') && {
                backgroundColor: '#e6f0ff',
              },
            ]}
          >
            {/* Icon */}
            <View
              style={[
                styles.icon,
                { backgroundColor: item.type === 'check' ? '#3b5bfd' : '#4a90e2' },
              ]}
            >
              <Text style={styles.iconText}>
                {item.type === 'check' ? '✓' : '👤'}
              </Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.content}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    paddingTop: 30,
  },
  header: {
  height: 56,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
},
headerTitle: {
  fontSize: 16,
  fontWeight: 'bold',
},
  item: {
    flexDirection: 'row',
    padding: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  text: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  time: {
    fontSize: 11,
    color: '#999',
  },
});