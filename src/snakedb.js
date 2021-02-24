const scores = document.querySelector('.scoretable');

// real time listener
db.collection('scoreboard').onSnapshot((snapshot) => {
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        //console.log(change, change.doc.data(), change.doc.id);
        if(change.type === 'added') {
            renderscore(change.doc.data(), change.doc.id)
        }
        if(change.type === 'removed') {

        }
    });
})


const renderscore = (data, id) => {
    const html = `
        <tr data_id="${id}">
            <td>${data.Username}</td>
            <td>${data.Score}</td>
        </tr>
    `;
    scores.innerHTML += html;
}