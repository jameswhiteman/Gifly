if (Meteor.isClient) {
    var Watson = Npm.require('watson-developer-cloud');
    var speechToText = Watson.speech_to_text({
        username: '',
        password: '',
        version: 'v1'
    });
    speechToText.recognize(params, function(err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(JSON.stringify(res, null, 2));
        }
    });
}

if (Meteor.isServer) {
}
