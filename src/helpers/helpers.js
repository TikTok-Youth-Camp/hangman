export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
      }, 2000);
}

export function checkWin(correct, wrong, word) {
    let status = 'win';

    //check for win
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        }
    })

    // check if lose

    return status;
}
