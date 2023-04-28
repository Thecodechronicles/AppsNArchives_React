// bcfa6c77895c2f3189e7a1c5ae9b5e711a03117e
// comments uncomments

// import React from 'react';
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import App from './App'
// import 'normalize.css/normalize.css'
// import './styles/styles.scss'

console.log('app is running !');

// function App() {
//     console.log('useState', useState);
//     const [state, setState] = useState('');
//     const appInner = () => {
//         setState('Again !!!!');
//         console.log('appInner working !');
//     }
//     return (
//         <div>
//             <h2 onClick={appInner}>Hi ! Let's just get started {state}!</h2>
//         </div>
//     );
// }

const NotesApp = () => {
    const localNotes = localStorage.getItem('notes') === '[]' ? null : JSON.parse(localStorage.getItem('notes'));
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [notes, setNotes] = useState(localNotes || []);

    const addNotes = (e) => {
        e.preventDefault();
        setNotes([
            ...notes,
            { title, body }
        ]);
        setTitle('');
        setBody('');
    }

    const removeNotes = (title) => {
        const retainedNotes = notes.filter((note) => {
            return note.title !== title;
        });
        setNotes(retainedNotes);
    }

    useEffect(() => {
        console.log('Hi ! Inside NotesApp');
        // localStorage.setItem('notes', JSON.stringify(notes));
    });

    //     return ([<input type='text'/>
    //             <button>abc</button>]);

    // ReactDOM doesn't expect arrays to be returned directly by a component. It only expects an element (custom like: <mnop> or, HTML-mapped like: <div>) to be returned. <mnop> can't return it's children array directly. It has to be wrapped inside either an element or processed (for eg: by React.Children.map etc., If wrapped inside a custom element). But, Since <div> (HTML-mapped element) is the last stoppage in rendering chain, It's children array would be processed by ReactDOM itself. If <div>'s children array also contains an array at some position then, that array will also be further processed by ReactDOM

    return (
        <div>
            <h2>Notes</h2>
            {notes.map((note) => {
                return (
                    <Notes
                        note={note}
                        removeNote={removeNotes}
                    />
                )
            })
            }
            <form onSubmit={addNotes}>
                {/* <React.Fragment> */}
                <input value='{title}' onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <button>Add Notes</button>
                {/* </React.Fragment> */}
            </form>
        </div>
    )
}

const Notes = ({ note, removeNote }) => {

    useEffect(() => {
        console.log('Hi ! Inside Notes');
    })

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={(e) => {
                // e.preventDefault();
                removeNote(note.title);
            }}>Remove Notes</button>
        </div>
    )
}

let appRoot = document.getElementById('reactApp');
ReactDOM.render(<NotesApp />, appRoot);
