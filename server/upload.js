Meteor.methods({
  parseUpload(data, subset) {

    parsed = Baby.parse(data, {
      header: true
    })

    jsonArr = parsed.data
    console.log(parsed.data)
    check(jsonArr, Array)

    for (var i = 0; i < jsonArr.length; i++) {
      let item = jsonArr[i]
      item.matchId = moment(item.date, "DD.M.YYYY").format("DDMMYYYY") + item.team + item.against
      exists = Events.findOne(item.matchId)
      if (!exists) {
        Events.insert(item)
      }
    }
  }
})
