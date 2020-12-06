import * as contentful from 'contentful';

const contentfulclient  = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

export default contentfulclient;