import React from 'react';
import { Helmet } from "react-helmet";

export default class Meta extends React.Component {
    render() {
        return (
            <Helmet>
                <title>Pushkara Photography</title>
                <meta name="Description" content="It's a collection of photos taken by Pushkara Nagaragadde and it's description. Category: Photography" />
            </Helmet>
        );
    }
}