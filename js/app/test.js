(function () {

     var randomString = function (length) {
        var text = "";
        var possible = "abcdef0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    var httpMethod = 'GET',
        url = 'https://api.twitter.com/1.1/search/tweets.json',
        parameters = {
            q: '@twitterapi',
            oauth_consumer_key: 'oC7ubbsEfnSb9IHwjIAmjNxUL',
            oauth_token: '743789924495802368-RoQ320tSgx5fDoLjncVFHU3MtdwtK7O',
            oauth_nonce: randomString(32),
            oauth_timestamp: Math.floor(Date.now() / 1000),
            oauth_signature_method: 'HMAC-SHA1',
            oauth_version: '1.0'
        },
        consumerSecret = 'SFL26CYbC61BtRG36uZm29LZpQqlciyO20PsWlbRrVSGycbvTt',
        tokenSecret = 'WXm0ZI3ksvKrJCu5o3P0AuH4pRPd5xo42zN5trmNC4KHc',

        encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, {
            encodeSignature: true
        });

    var sendUrl = url + '?' + jQuery.param(parameters) + '&oauth_signature=' + encodedSignature;
    console.log(sendUrl);

    var y = 'OAuth oauth_consumer_key="' + parameters.oauth_consumer_key + '", oauth_nonce="' + parameters.oauth_nonce + '", oauth_signature="' + encodedSignature + '", oauth_signature_method="' + parameters.oauth_signature_method + '", oauth_timestamp="' + parameters.oauth_timestamp + '", oauth_token="' + parameters.oauth_token + '", oauth_version="' + parameters.oauth_version + '"';
})();

