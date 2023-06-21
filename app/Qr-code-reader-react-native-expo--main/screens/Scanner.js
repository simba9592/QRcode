import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';


export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const navigation = useNavigation(scandata);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    alert(`Invoice data : ${data}`);
    // console.log(JSON.parse(data));
    sendDataToServer(data);
    // setScanData(JSON.parse(data))

  };

  const sendDataToServer = async (data) => {
    try {
      const response = await fetch('http://10.10.13.101:8080/api/test/scan_data', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: data,
      });
      
      // console.log(response, "rrrrrrrrrr");
    } catch (error) {
      console.log("ok");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      {/* {scanned && <Button title={'Insert the paid'} onPress={() => navigation.navigate("Senddata")} />} */}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});