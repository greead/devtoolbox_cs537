import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
// import markdown_doc from '../../assets/updates.md';

export default function UpdatesItem() {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        import('../../assets/updates.md').then(res => {
            fetch(res.default)
                .then((response) => response.text())
                .then((content) => setMarkdownContent(content));


        }, [])
    });


    return (
        <div>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
};
