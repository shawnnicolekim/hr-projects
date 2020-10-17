var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // $('.submit').on('click', function () {
    //   var text = document.getElementById('message').value;
    //   var message = new Messages(App.username, text);
    //   MessagesView.renderMessage(message);
    // });

    // $('.username').on('click', function() {
    //   var user = $(this).text();
    //   var friend = new Friends();
    //   friends.toggleStatus(user);
    // });

    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },


  renderMessage: function(message) {
    MessagesView['$chats'].prepend(MessageView.render(message));
  },

  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
  }

};