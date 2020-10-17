var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    // creates a property of the inputted username
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval(App.fetch, 3000);
  },


  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      Rooms.update(data.results, RoomsView.render);
      Messages.update(data.results);

      if (!data.results || !data.results.length) { return; }

      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
