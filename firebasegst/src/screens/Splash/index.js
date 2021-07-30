import React from 'react';
import { View, Text, Image } from 'react-native';

const Splash = () => {
    return (
        <View View style={{
            flex: 1,
            backgroundColor: '#FAF9FA',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Image
                source={{ uri: 'https://media.giphy.com/media/IwSG1QKOwDjQk/giphy.gif' }}
                style={{ width: 250, height: 250 }}
            />
        </View>
    );
}

export { Splash };