//defining a class
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(channelName, category, videoTitle, description, duration, aspectRatio, rating, likeCount, ratingCount, viewCount, favoriteCount, commentCount) {
        var _this = this;
        this.channelName = channelName;
        this.category = category;
        this.videoTitle = videoTitle;
        this.description = description;
        this.duration = duration;
        this.aspectRatio = aspectRatio;
        this.rating = rating;
        this.likeCount = likeCount;
        this.ratingCount = ratingCount;
        this.viewCount = viewCount;
        this.favoriteCount = favoriteCount;
        this.commentCount = commentCount;
        //method
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.channelName = channelName;
        this.category = category;
        this.videoTitle = videoTitle;
        this.description = description;
        this.duration = duration;
        this.aspectRatio = aspectRatio;
        this.rating = rating;
        this.likeCount = likeCount;
        this.ratingCount = ratingCount;
        this.viewCount = viewCount;
        this.favoriteCount = favoriteCount;
        this.commentCount = commentCount;
    } //end constructor
    return YoutubeVideo;
}()); //end class
var myChannel = new YoutubeVideo("Alan Walker", "Music", "Alan Walker-Faded", "Music video by Alan walker", 352, "widescreen", 4.9, 430519, 441253, 88270796, 306556, 270597);
console.log(myChannel.getVideoTitle());
