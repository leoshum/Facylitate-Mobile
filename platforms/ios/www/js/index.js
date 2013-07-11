var date = new Date(),
    day = date.toDateString(),
    app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    addNote: function() {
        var time = formatAMPM(date),
            note = $('#new-note').val(),
            noteView = '<li style="white-space: normal;" data-role="list-divider" role="heading"><strong>' + 
                        time +'</strong></li><li><pre style="style="white-space:normal;">' + 
                        note + '</pre></li>';

            console.log(note);

        $('#new-note').val('');
        $('#notes-container').append(noteView);
    },

    saveNote: function() {
        var teacherName = $('#teacher-name').val();

        alert('All notes should be saved to the server for the teacher: ' + teacherName);
    }
};

$(document).ready( function() {
    $('#today-date').text(day);
});

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
