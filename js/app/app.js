define(['./views/tweetView'], function(TweetView) {
    var tweetView = new TweetView();

    $('#search').on('click', function() {
        tweetView.searchTweets();
    })
});

