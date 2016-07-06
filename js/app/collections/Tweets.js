define(function(require) {
    var Tweet = require('../models/Tweet');

    return Backbone.Collection.extend({
        model: Tweet,

        initialize: function(attrs) {
            this.options = attrs;
        },

        url: function() {
            // Twitter api authentification

            var httpMethod = 'GET',
                getUrl = 'https://api.twitter.com/1.1/search/tweets.json',
                parameters = {
                    q: '@' + this.options.userName,
                    oauth_consumer_key: 'oC7ubbsEfnSb9IHwjIAmjNxUL',
                    oauth_token: '743789924495802368-RoQ320tSgx5fDoLjncVFHU3MtdwtK7O',
                    oauth_nonce: randomString(32),
                    oauth_timestamp: Math.floor(Date.now() / 1000),
                    oauth_signature_method: 'HMAC-SHA1',
                    oauth_version: '1.0'
                },
                consumerSecret = 'SFL26CYbC61BtRG36uZm29LZpQqlciyO20PsWlbRrVSGycbvTt',
                tokenSecret = 'WXm0ZI3ksvKrJCu5o3P0AuH4pRPd5xo42zN5trmNC4KHc',
                encodedSignature = oauthSignature.generate(httpMethod, getUrl, parameters, consumerSecret, tokenSecret, {
                    encodeSignature: true
                });

            return getUrl + '?' + jQuery.param(parameters) + '&oauth_signature=' + encodedSignature;
        },

        parse: function(response) {
            var userError = $('.user-error');
            if (response.statuses != "") {
                this.isUserExist = true;
                userError.hide();

                // Get results
                return response.statuses;

            } else {
                this.isUserExist = false;
                userError.show();
            }
        }
    });
});
