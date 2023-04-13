import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  "project_info": {
    "project_number": "694399617605",
    "project_id": "fir-otp-d7b4f",
    "storage_bucket": "fir-otp-d7b4f.appspot.com"
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "1:694399617605:android:7e9fc8eaf4b4912fd5312c",
        "android_client_info": {
          "package_name": "testing.otp"
        }
      },
      "oauth_client": [
        {
          "client_id": "694399617605-989s4ek3r7am94vcih31tqp95c53h2fg.apps.googleusercontent.com",
          "client_type": 3
        }
      ],
      "api_key": [
        {
          "current_key": "AIzaSyDzExFYR06zmvZ8LaFOHFnYKPMjO9qL1RQ"
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": [
            {
              "client_id": "694399617605-989s4ek3r7am94vcih31tqp95c53h2fg.apps.googleusercontent.com",
              "client_type": 3
            }
          ]
        }
      }
    }
  ],
  "configuration_version": "1"
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

firebase.initializeApp(firebaseConfig);