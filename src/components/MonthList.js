import React from 'react';
import {connect} from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import {changeMonthHover, changeContent} from '../redux/actions';
import {colorOfMonth} from '../utils/utils';


const  MonthList = ({monthList, changeMonthHover, changeContent, userList}) => { 
    return (
        <ListGroup variant="pills" className="flex-column">
            {monthList.map((el) => {
                return (
                    <ListGroup.Item 
                            key={el.key}
                            onMouseEnter={() => {
                                changeMonthHover(el.month);
                                changeContent(el.month, userList);
                            }} 
                            onMouseLeave={() => { 
                                changeMonthHover('none');
                                changeContent('none', []);
                            }}
                            variant={colorOfMonth(el.month, userList)}
                            action
                        >
                            {el.month}
                    </ListGroup.Item>
                );
            })}
      </ListGroup>
    );
}

const mapStateToProps = state => {
    return {
        userList: state.users.users, 
        monthList: state.month.monthList
    };
}

const mapDispatchToProps = {
    changeMonthHover,
    changeContent
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthList);
