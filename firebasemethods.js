fbGetData(){
firebase.database().ref('/').on('child_added', (snapshot) => {
this.tabsArray.push(snapshot.val())
})
}
//read tabnames from firebase 

fbPostData(tabname){
    firebase.database().ref('/').push({tabname: tabname});
}
// add tabname to firebase

