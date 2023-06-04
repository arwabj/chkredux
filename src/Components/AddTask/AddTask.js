import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../../JS/Actions/todoList';

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault ()
    if (text) {
      dispatch(addTask({id: Math.random(), text, isDone: false}));
      setText("")

    } else alert("Can not add an empty text !");
  };

    return (
    <div>
        <h2>Add List</h2>
        <Form onSubmit={handleAdd}>
        <Form.Control type='text' placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)} />
        <Button variant='primary' type ='submit' onClick={handleAdd}> Submit</Button>
      
        </Form>
        </div>
  );
};

export default AddTask;