import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchUsers} from '../redux/actions'; 
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

const UserList = ({content, loading}) => {
    const dispatch = useDispatch();

    const renderUsers = (content) => {
        return (
            <ListGroup>
                {content.map(user => {
                    return (
                        <ListGroup.Item key={user.id}>
                            {`${user.firstName} ${user.lastName}`}
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>    
        );
    }

    const btnContent = (loading) => {
        if (loading) {
            return (
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            );
        } else {
            return 'Download users';
        }
    }

    return (
        <div>
            {content.length ? renderUsers(content) : 'You can click on button and hover your mouse on month and get users, that have a birthday'}
            <Button variant="primary" onClick={() => dispatch(fetchUsers())} block>
                {btnContent(loading)}
            </Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        content: state.users.content,
        loading: state.app.loading
    };
}

export default connect(mapStateToProps, null)(UserList);
