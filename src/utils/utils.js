export const dateToMonth = (dateStr) => {
    const date = new Date(dateStr);
    return date.getMonth();
};

export const monthNumToStr = (num) => {
    switch (num) {
        case (0):
            return 'January';
        case (1):
            return 'February';
        case (2):
            return 'March';
        case (3):
            return 'April';
        case (4):
            return 'May';
        case (5):
            return 'June';
        case (6):
            return 'July';
        case (7):
            return 'August';
        case (8):
            return 'September';
        case (9):
            return 'October';
        case (10):
            return 'November';
        case(11): 
            return 'December';    
        default:
            return ''; 
    }
}

export const colorOfMonth = (month, userList) => {
    const count = userList.filter(user => monthNumToStr(dateToMonth(user.dob)) === month).length;
    if (count >= 0 && count <= 2) {
        return 'dark';
    } else if (count >= 3 && count <= 6) {
        return 'primary';
    } else if (count >= 7 && count <= 10) {
        return 'success';
    } else if (count => 11){
        return 'danger';
    } else {
        return '';
    };
}
