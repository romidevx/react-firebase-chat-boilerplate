import React from 'react';
import db from '../firebase';

import DeleteIcon from '@material-ui/icons/Delete';

function Todo({item}) {
    return (
        <div className="todo">

            <h4>{item.todo}</h4>

            <span onClick={ e =>  
                db.collection('tasks')
                .doc(item.id)
                .delete()
            }><DeleteIcon/></span>
            
        </div>
    )
}

export default Todo
