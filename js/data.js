(function () {
    "use strict";

    // CONSTANTS
    var GROUP_KEY_NEWS = "1-news";
    var GROUP_KEY_TWEETS = "2-tweets";
    var GROUP_KEY_EVENTS = "3-events";
    var GROUP_KEY_PHOTOS = "4-photos";

    var NEWS_RSS_URL = "http://www.news.wisc.edu/feeds/list/4";
    var TWITTER_SEARCH_URL = "http://search.twitter.com/search.json?q=from%3AUWMadison%20OR%20to%3AUWMadison%20OR%20%40UWMadison";
    var EVENTS_RSS_URL = "http://today.wisc.edu/events.rss2";
    
    var COUNT_NEWS = 10;
    var COUNT_TWEETS = 20;
    var COUNT_EVENTS = 10;

    var list = new WinJS.Binding.List();
    var groupedItems = list.createGrouped(
        function groupKeySelector(item) { return item.group.key; },
        function groupDataSelector(item) { return item.group; }
    );

    // Placeholder text
    var itemContent = "<p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat";
    var itemDescription = "Item Description: Pellentesque porta mauris quis interdum vehicula urna sapien ultrices velit nec venenatis dui odio in augue cras posuere enim a cursus convallis neque turpis malesuada erat ut adipiscing neque tortor ac erat";
    var groupDescription = "Group Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor scelerisque lorem in vehicula. Aliquam tincidunt, lacus ut sagittis tristique, turpis massa volutpat augue, eu rutrum ligula ante a ante";

    var uwBG = "/images/UWCrest_gs-small.png";
    var uwBGWide = "/images/UWlogo_fl_gs.png";
    // These three strings encode placeholder images. You will want to set the
    // backgroundImage property in your real data to be URLs to images.
    var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";
    var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
    var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";

    // Each of these sample groups must have a unique key to be displayed
    // separately.
    var groups = {};
    groups[GROUP_KEY_NEWS] = {
        key: GROUP_KEY_NEWS,
        title: "News",
        subtitle: "Latest UW-Madison news",
        backgroundImage: uwBGWide,
        description: "Campus news from <a href=\"http://news.wisc.edu\">news.wisc.edu</a>."
    };
    groups[GROUP_KEY_TWEETS] = {
        key: GROUP_KEY_TWEETS,
        title: "Tweets",
        subtitle: "UW-Madison on Twitter",
        backgroundImage: uwBGWide,
        description: "Latest <a href=\"http://twitter.com/UWMadison\">@UWMadison</a> Twitter activity."
    };
    groups[GROUP_KEY_EVENTS] = {
        key: GROUP_KEY_EVENTS,
        title: "Events",
        subtitle: "What's happening at UW-Madison?",
        backgroundImage: uwBGWide,
        description: "Events from <a href=\"http://today.wisc.edu\">today.wisc.edu</a>."
    };
    groups[GROUP_KEY_PHOTOS] = {
        key: GROUP_KEY_PHOTOS,
        title: "Photos",
        subtitle: "UW-Madison photos",
        backgroundImage: uwBGWide,
        description: "<a href=\"http://instagram.com/uwmadison\">UW-Madison</a>'s Instagram photostream."
    };

    // TODO: Replace the data with your real data.
    // You can add data from asynchronous sources whenever it becomes available.
    function getNewsData() {
        var dataItems = [];
        for (var i = 0; i < COUNT_NEWS; i++) {
            var placeholder = {
                group: groups[GROUP_KEY_NEWS],
                title: "",
                subtitle: "",
                description: "",
                content: "",
                backgroundImage: uwBG
            };
            dataItems.push(placeholder);
        }

        $.get(NEWS_RSS_URL, function (data) {
            var $xml = $($.parseXML(data));
            var xmlItems = $xml.find("item");
            for (var i = 0; i < dataItems.length; i++) {
                if (i < xmlItems.length) { // if there are enough news items available to fill this item
                    var di = dataItems[i];
                    var $xi = $(xmlItems[i]);
                    di.title = $xi.find("title").text();
                    di.link = $xi.find("link").text();
                    di.description = $xi.find("description").text();
                    di.content = $xi.find("description").text();
                    di.subtitle = $xi.find("pubDate").text();

                    // scrape photo and content from news.wisc.edu article

                    var yqlUrl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22" +
                        encodeURIComponent(di.link) +
                        "%22%20and%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22story_content%22%5D'";

                    var contentCallback = function (dataItem) { // need to create a closure since $.get is async
                        return function (contentData) {
                            var $contentData = $(contentData);
                            // scrape photo (if there is one)
                            var imgSrc = $($contentData.find(".photo img")[0]).attr("src");
                            if (imgSrc !== undefined && imgSrc !== null) {
                                dataItem.backgroundImage = imgSrc;
                            }

                            dataItem.content = "";
                            // scrape text from article

                            var paras = $contentData.find("#story_content").children("p");
                            paras.each(function (p) {
                                dataItem.content += "<p>" + $(paras[p]).text() + "</p>";
                            });

                            list.notifyReload(); // necessary to refresh dataItems
                        }
                    }
                    var imgDataFn = contentCallback(di);
                    $.get(yqlUrl, imgDataFn);
                }
                else { // not enough news items; delete an item from the end; doesn't actually work because list itself doesn't refresh
                    dataItems.splice(dataItems.length - 1, 1);
                }
            }
        });

        return dataItems;
    }

    function getTweetsData() {
        var dataItems = [];
        for (var i = 0; i < COUNT_TWEETS; i++) {
            var placeholder = {
                group: groups[GROUP_KEY_TWEETS],
                title: "",
                subtitle: "",
                description: "",
                content: "",
                backgroundImage: lightGray
            };
            dataItems.push(placeholder);
        }

        $.getJSON(TWITTER_SEARCH_URL + "&page=1&rpp=" + COUNT_TWEETS, function (data) {
            var tweets = data.results;
            for (var i = 0; i < tweets.length; i++) {
                var twt = tweets[i];
                var di = dataItems[i];
                di.title = twt.from_user_name + " (@" + twt.from_user + ")";
                if (twt.to_user_name !== undefined) {
                    di.title += " to " + twt.to_user_name + " (@" + twt.to_user + ")";
                }
                di.description = twt.text;
                di.subtitle = twt.created_at;
                di.content = twt.text;
                di.backgroundImage = twt.profile_image_url;
                list.notifyReload();
            }
        });

        return dataItems;
    }

    function getEventsData() {
        var dataItems = [];
        for (var i = 0; i < COUNT_EVENTS; i++) {
            var placeholder = {
                group: groups[GROUP_KEY_EVENTS],
                title: "",
                subtitle: "",
                description: "",
                content: "",
                backgroundImage: uwBG
            };
            dataItems.push(placeholder);
        }

        $.get(EVENTS_RSS_URL, function (data) {
            var $xml = $(data);
            var xmlItems = $xml.find("item");
            for (var i = 0; i < dataItems.length; i++) {
                if (i < xmlItems.length) { // if there are enough events items available to fill this item
                    var di = dataItems[i];
                    var $xi = $(xmlItems[i]);
                    di.title = $xi.find("title").text();
                    di.link = $xi.find("link").text();
                    di.description = $xi.find("description").text();
                    di.content = $xi.find("description").text();
                    di.subtitle = $xi.find("pubDate").text();
                    
                }
                list.notifyReload(); // necessary to refresh dataItems
            }
        });

        return dataItems;
    }

    function getPhotosData() {
        var data = [
            { group: groups[GROUP_KEY_PHOTOS], title: "Photo 1", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            { group: groups[GROUP_KEY_PHOTOS], title: "Photo 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            { group: groups[GROUP_KEY_PHOTOS], title: "Photo 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            { group: groups[GROUP_KEY_PHOTOS], title: "Photo 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            { group: groups[GROUP_KEY_PHOTOS], title: "Photo 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            { group: groups[GROUP_KEY_PHOTOS], title: "Photo 6", subtitle: "Item Subtitle: 6", description: itemDescription, content: itemContent, backgroundImage: lightGray }
        ];

        return data;
    }

    getNewsData().forEach(function (item) {
        list.push(item);
    });
    getTweetsData().forEach(function (item) {
        list.push(item);
    });
    getEventsData().forEach(function (item) {
        list.push(item);
    });
    getPhotosData().forEach(function (item) {
        list.push(item);
    });

    WinJS.Namespace.define("Data", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemReference: getItemReference,
        getItemsFromGroup: getItemsFromGroup,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference
    });

    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return [item.group.key, item.title];
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }

    // Get the unique group corresponding to the provided group key.
    function resolveGroupReference(key) {
        for (var i = 0; i < groupedItems.groups.length; i++) {
            if (groupedItems.groups.getAt(i).key === key) {
                return groupedItems.groups.getAt(i);
            }
        }
    }

    // Get a unique item from the provided string array, which should contain a
    // group key and an item title.
    function resolveItemReference(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                return item;
            }
        }
    }

})();
