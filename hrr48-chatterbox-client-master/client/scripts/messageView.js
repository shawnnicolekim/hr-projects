var MessageView = {

  // Shawn note: should post message into chat room?
  render: _.template(`
  <!--

  -->
  <div class="chat">
    <div
      class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
      data-username="<%- username %>">
      <%- username %>
    </div>
    <div><%- text %></div>
  </div>
  <!--
        -->
  `)

};