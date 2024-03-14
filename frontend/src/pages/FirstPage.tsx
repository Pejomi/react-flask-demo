import Title from "antd/es/typography/Title";
import PageContent from "../components/PageContent";
import { useEffect, useState } from 'react';

const FirstPage = () => {
    const [data, setData] = useState({
        Name: ""
    });


    useEffect(() => {
        fetch('/demo')
            .then(data => data.json()).then(data => {
                setData(data);
            });
    }, []);

    return (
        <PageContent title="First Page" content={
            <>
                <p>This is the first page.</p>
                <Title level={2}>Get data</Title>
                <p>{data.Name}</p>
                <Title level={2}>Get image</Title>
                <img src="/img" alt="demo" />
            </>


        } />
    );
}

export default FirstPage;