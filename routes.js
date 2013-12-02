exports.index = function(req, res) {
    res.render('index', { layout : 'layout', title : 'Home' })
}
exports.test  = function(req, res) {
    res.render('test', { layout : 'test', title : 'Test' })
}
exports.name  = function(req, res) {
    res.render('name', { layout : 'layout', title : 'Name', user : 'Guest' })
}
exports.user  = function(req, res) {
    var you  = req.params.user,
        user = you.charAt(0).toUpperCase() + you.slice(1)
    res.render('name', { layout : 'layout-name', title : 'Name', user : user })
}
exports.partials = function (req, res) {
  var name = req.params.name
  res.render('partials/' + name, { title : 'Partial' })
}