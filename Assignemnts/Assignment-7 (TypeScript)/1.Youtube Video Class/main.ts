//defining a class

class YoutubeVideo{

    constructor(public channelName : string, public category : string, public videoTitle : string, 
                public description : string, public duration : number, public aspectRatio : string,
                public rating : number, public likeCount : number, public ratingCount : number,
                public viewCount : number, public favoriteCount : number, public commentCount? : number){
                    
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

    //method
    getVideoTitle = ()=>{
        return this.videoTitle
    }

}//end class

let myChannel = new YoutubeVideo("Alan Walker", "Music", "Alan Walker-Faded", "Music video by Alan walker", 352,
                                 "widescreen", 4.9, 430519, 441253, 88270796, 306556, 270597)

console.log(myChannel.getVideoTitle())