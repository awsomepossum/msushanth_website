$( document ).ready(function() {

    // Create device
    var device = new Device("arduino.local");

    // Update temperature & humidity
    device.getVariable('brightness', function(data) {

      // Update temperature display
      $('#brightness').html(data.brightness + ' lumens');

      // Update status as well
      if (data.connected = true) {
      	$('#status').text('Online');
      	$('#status').removeClass('red');
      	$('#status').addClass('green');
      }
    });

    // Update humidity display
    device.getVariable('distance', function(data) {
      $('#distance').html(data.distance + ' feet');
    });

});

