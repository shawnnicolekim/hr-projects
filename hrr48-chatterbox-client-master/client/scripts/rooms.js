var Rooms = {

  _data: new Set,

  selected: 'lobby',

  items: function() {
    return _.chain([...Rooms._data]);
  },

  update: function(messages, callback = ()=>{}) {
    var length = Rooms._data.size;

    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));

    if (Rooms.selected === null) {
      Rooms.selected = Rooms._data.values().next().value;
    }

    if (Rooms._data.size !== length) {
      callback(Rooms.items());
    }
  },

  isSelected: function(roomName) {
    return roomName === Rooms.selected || !roomName && Rooms.selected === 'lobby';
  },

  add: function(room, callback = ()=>{}) {
    Rooms._data.add(room);
    Rooms.selected = room;
    callback(Rooms.items());
  }
};