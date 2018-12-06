import React, {Component} from 'react';


class Note extends Component {
    render() {
        const {note} = this.props;
        return(
            <div className="grid">
                <div className="note">{note.text}</div>
                <div className="button">
                    <button className="btn btn-danger" onClick={this.props.removeNote}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Note;