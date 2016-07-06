define(function(require) {

    var Tweets = require('../collections/Tweets');

    return Backbone.View.extend({
        el: $('.tweets'),

        template: _.template($('#tweetsTmpl').html()),

        initialize: function() {},

        render: function() {
            this.$el.html(this.template({tweets: this.tweets.toJSON()}));
            return this;
        },

        searchTweets: function() {
            var userName = $('.search-tweets');
            this.options =  {userName: userName.val()};
            this.tweets = new Tweets({userName: this.options.userName});

            var that = this;

            this.tweets.fetch({
                reset: true
            });

            // Update tweets every 60 seconds

            setInterval(function() {
                if (that.tweets.isUserExist === true) {
                    that.tweets.fetch({
                        reset: true
                    });
                }
            }, 60000);

            this.listenTo(this.tweets, 'reset', this.render);
        }
    });
});