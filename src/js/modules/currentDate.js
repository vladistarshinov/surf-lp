    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    document.getElementById('day').innerHTML = day;
    document.getElementById('m_y').innerHTML = month + ' | ' + year;
