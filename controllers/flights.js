const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    edit,
    updateFlight
};

function updateFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        for (let key in req.body) {
            if (req.body[key] === '') delete req.body[key];
        }

        flight.destination.push(req.body);
        flight.arrival.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

//     Flight.findById(req.params.id, function(err, flight) {
//         // flight.destination.push(req.body);
//         // flight.arrival.push(req.body);
//         // flight.save(function(err) {
//         // res.redirect(`/flights/${flight._id}`);
//         flight.save(function() {
//             if (err) return res.redirect(`/flights/${flight._id}`);
//             // res.redirect('/flights');
//             res.redirect(`/flights/${flight._id}`);
//             console.log(res.body);
//     });
// })};

function edit(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/edit', {title: 'Edit Flight', flight} )
    });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
      console.log(flight)
    res.render('flights/show', {title: 'Flight Details', flight} )
  });
}

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights');
    res.redirect('/flights');
    console.log(res.body);
  });
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'Add Flight'});
}

function index(req, res) {
    // Flight.deleteMany({}, function (e,f) {
    //     res.render('flights/index', { title: 'All Flights', flights});
    // })
  Flight.find({}, function(err, flights) {
      if(flights) {
          res.render('flights/index', { title: 'All Flights', flights});
      } else {
          throw Error;
      }

  });
}

