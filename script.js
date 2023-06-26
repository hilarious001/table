
El = {
    staff : {
        John : {
            name : 'John Doe',
            Nationality : 'Nigeria',
            SOO : 'Niger',
            PL : ['Python', 'Java'],
        }, Peter : {
            name : 'Peter Mary',
            Nationality : 'American',
            SOO : 'New York',
            PL : 'Nill'
        }
    }, 
    Manager : {
        Obi : {
            Peter : {
            name : 'Peter Obi',
            Nationality : 'Canada',
            SOO : 'Nill',
            PL : 'Nill'
            }
        }
    }
}


function Table() {
    let ds = document.getElementById('a')
    for (let x in El.staff.John) {
        ds.innerHTML += ' <td> ' + El.staff.John[x] + ' <td';
        }
         ds = document.getElementById('b')
        for (let x in El.staff.Peter) {
            ds.innerHTML += ' <td> ' + El.staff.Peter[x] + ' <td';
    }
    ds = document.getElementById('c')
    for (let x in El.Manager.Obi.Peter) {
        ds.innerHTML += ' <td> ' + El.Manager.Obi.Peter[x] + ' <td';
}
    
}

   let n = 0;
   document.getElementById('s').innerHTML = n
function Like() {
   let span = document.getElementById('s').innerHTML = ++n;
   //console.log(n);

};
