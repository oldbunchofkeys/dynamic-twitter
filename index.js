var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    tweetCount: '13.0K',
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var headerText = document.createElement('div');
headerText.innerHTML = `
    <p>${user1.displayName}</p>
    <p>${user1.tweetCount}</p>
`;
document.querySelector('#header__items-data-container').append(headerText);

var bannerText =  document.createElement('div');
bannerText.innerHTML = `
    <p>${user1.displayName}</p>
    <p>${user1.userName}</p>
    <p>joined ${user1.joinedDate}</p>
`;
document.querySelector('#profile-img-following').after(bannerText);

var followingData = document.createElement('div');
followingData.classList.add('follower-count-wrapper');
followingData.innerHTML = `
    <p>${user1.followingCount} Following</p> 
    <p>${user1.followerCount} followers</p>
`
var tabsWrapper = document.querySelector('#tabs-wrapper');
var parentContainer = tabsWrapper.parentNode;
parentContainer.insertBefore(followingData, tabsWrapper);

for (var tweet of user1.tweets) {
    var tweetEntry = document.createElement('div');
    tweetEntry.classList.add('tweet-wrapper');
    tweetEntry.innerHTML = `
        <img class="tweet__profile-pic" src="${user1.avatarURL}" alt="">
        <div class="tweet__contents">
        <p>${user1.displayName} <span>${user1.userName} </span></p>
        <p>${tweet.text}</p>
        </div>
    `;
    document.querySelector('#tweets-container').append(tweetEntry);
}

var queryString = window.location.search;
console.log(queryString)
