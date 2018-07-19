$.ajax({
    url: "https://httpbin.org/get",
    method: "GET",
    done: function( data ) {
        console.log(data);
    },
    fail: function() {
        console.log('error');
    }
  })