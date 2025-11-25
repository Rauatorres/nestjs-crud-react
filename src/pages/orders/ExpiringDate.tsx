function getDateMonthLiteral(date: Date){
    let month: string;
    switch(date.getMonth()){
        case 0:
            month = 'janeiro';
            break;
        case 1: 
            month = 'fevereiro';
            break;
        case 2: 
            month = 'março';
            break;
        case 3: 
            month = 'abril';
            break;
        case 4: 
            month = 'maio';
            break;
        case 5: 
            month = 'junho';
            break;
        case 6: 
            month = 'julho';
            break;
        case 7: 
            month = 'agosto';
            break;
        case 8: 
            month = 'setembro';
            break;
        case 9: 
            month = 'outubro';
            break;
        case 10: 
            month = 'novembro';
            break;
        case 11: 
            month = 'dezembro';
            break;
        default:
            month = 'não definido';
    }
    return month;
}

const ExpiringDate = (props: { expiresAt: string }) => {
    const expiringDate = new Date(props.expiresAt);

    expiringDate.setMonth(expiringDate.getMonth() + 1);
    expiringDate.setDate(expiringDate.getDate() + 1);

    const expiringDateString = `${expiringDate.getDate()} ${getDateMonthLiteral(expiringDate)} ${expiringDate.getFullYear()}`;

    return (
        <div>{expiringDateString}</div>
    )
};

export default ExpiringDate