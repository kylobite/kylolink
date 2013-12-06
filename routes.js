exports.index = function(req, res) {
    res.render('index', { title : 'Home' })
}
exports.ng  = function(req, res) {
    res.render('ng', { title : 'Angular' })
}
exports.name  = function(req, res) {
    res.render('name', { title : 'Name', user : 'Guest' })
}
exports.user  = function(req, res) {
    var you  = req.params.user,
        user = you.charAt(0).toUpperCase() + you.slice(1)
    res.render('name', { title : 'Name', user : user })
}
exports.partials = function (req, res) {
  var name = req.params.name
  res.render('partials/' + name, { title : 'Partial' })
}