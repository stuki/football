Template.upload.onCreated( () => {
  Template.instance().uploading = new ReactiveVar(false);
})

Template.upload.helpers({
  uploading() {
    return Template.instance().uploading.get();
  }
})

Template.upload.events({
  'change [name="uploadCSV"]' (event, template) {

    selected = $('select').val()

    if (selected == "") {
      Bert.alert("Select a database before choosing the file", 'warning')
      return 0
    }

    template.uploading.set(true)

    let files = event.target.files
    let file = files[0]
    let name = files[0].name
    console.log(name, file)

    if (window.FileReader) {
      let reader = new FileReader()

      reader.onload = function(event) {
        let csv = event.target.result
        Meteor.call('parseUpload', csv, selected, (error, response) => {
          if (error) {
            Bert.alert(error.reason, 'warning')
          } else {
            template.uploading.set(false)
            Bert.alert('Upload complete!', 'success', 'growl-top-right')
          }
        })
      }

      reader.readAsText(file)

    } else {
      Bert.alert('FileReader is not supported in this browser.')
    }
  }
})
