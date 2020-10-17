var Friends = {


  _data: new Set,

  items: function() {
    return _.chain([...Friends._data]);
  },

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  toggleStatus: function(name, callback = ()=>{}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }

};



// class Friends {
//   constructor() {
//     this._data = new Set;
//   }

//   items() {
//     return _.chain([...Friends._data]);
//   }

//   isFriend(name) {
//     return Friends._data.has(name);
//   }

//   toggleStatus(name, callback = ()=>{}) {
//     if (Friends._data.has(name)) {
//       Friends._data.delete(name);
//       callback(false);
//     } else {
//       Friends._data.add(name);
//       callback(true);
//     }
//   }

// }


/*
  //befriending function
  toggleStatus(user) {
    // check all children of ID #chats, get all of the .username textcontent that are equal to 'user'
    var friend = document.getElementsByClassName('username');
    var isFriend = false;

    // if the 'user' is already included in the friendsList, set isFriend to true
    if (this.friendsList.includes(user)) {
      isFriend = true;
    }

    // iterate over all of the friend
    for (var i = 0; i < friend.length; i++) {
      if (friend[i].textContext === user) {
        var newFriend = friend[i].textContext;
        // if they are already friends
        if (isFriend) {
          $(friend[i].parent()).css('background-color', 'grey');
        // if they aren't friends, make them friendly color
        } else {
          $(friend[i].parent()).css('background-color', 'blue');
        }
      }
    }

    // if isFriend is true
    if (isFriend) {
      this.friendsList.splice(this.friendsList.indexOf(user), 1);
    } else {
      this.friendsList.push(newFriend);
    }
  }
  */