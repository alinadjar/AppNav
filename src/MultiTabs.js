import React, { Component } from 'react'
//import { Text, View } from 'react-native'
import { Container, Header, Content, Tab, TabHeading, Tabs, Icon, Text, ScrollableTab } from 'native-base'

import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';

class MultiTabs extends Component {
    render() {
        return (
            // <Container>
            //     <Header hasTabs />
            //     <Tabs>
            //         <Tab heading="Tab1">
            //             <Tab1 />
            //         </Tab>
            //         <Tab heading="Tab2">
            //             <Tab2 />
            //         </Tab>
            //         <Tab heading="Tab3">
            //             <Tab3 />
            //         </Tab>
            //     </Tabs>
            // </Container>
            <Container>
                <Header hasTabs />
                <Tabs>
                    <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
                        <Tab2 />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
                        <Tab3 />
                    </Tab>
                </Tabs>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Tab1">
                        <Tab1 />
                    </Tab>
                    <Tab heading="Tab2">
                        <Tab2 />
                    </Tab>
                    <Tab heading="Tab3">
                        <Tab3 />
                    </Tab>
                    <Tab heading="Tab4">
                        <Tab1 />
                    </Tab>
                    <Tab heading="Tab5">
                        <Tab2 />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}


export default MultiTabs;
