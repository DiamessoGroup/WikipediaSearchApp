$(document).ready(function () {
    $("#searchWiki").on('keyup', function (e) {
        if (e.keyCode == 13) {
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php",
                data: {
                    format: "json",
                    action: "query",
                    list: "search",
                    srsearch: $('#searchWiki').val(),
                },
                dataType: 'jsonp',
                success: function (data) {
                    var searchResult = '<ul>';
                    for (var i = 1; i < data.query.search.length; i += 1) {
                        searchResult += `<a href="http://en.wikipedia.org/wiki/${data.query.search[i].title}" target="_blank"><li class="w3-card-4 w3-padding w3-margin w3-white w3-bottombar w3-border-white w3-hover-border-blue"><strong>${data.query.search[i].title}</strong><br><br>${data.query.search[i].snippet}</li></a>`;
                    }
                    searchResult += '</ul>';
                    $('#article2').html(searchResult);

                    var searchFeatured = '<ul>';
                    searchFeatured += `<a href="http://en.wikipedia.org/wiki/${data.query.search[0].title}" target="_blank"><li class="w3-card-4 w3-padding-32 w3-padding w3-margin w3-orange w3-hide-small w3-hide-medium w3-bottombar w3-border-orange w3-hover-border-black"><h4><i class="fa fa-star" style="font-size:24px">Featured</i></h4><strong>${data.query.search[0].title}</strong><br><br>${data.query.search[0].snippet}</li></a>`;
                    searchFeatured += '</ul>';
                    $('#featured').html(searchFeatured);

                    var searchFeaturedSmall = '<ul>';
                    searchFeaturedSmall += `<a href="http://en.wikipedia.org/wiki/${data.query.search[0].title}" target="_blank"><li class="w3-card-4 w3-padding w3-margin w3-white w3-hide-large w3-bottombar w3-border-white w3-hover-border-blue"><strong>${data.query.search[0].title}</strong><br><br>${data.query.search[0].snippet}</li></a>`;
                    searchFeaturedSmall += '</ul>';
                    $('#article1').html(searchFeaturedSmall);
                }
            });
            $('#searchWiki').val('');
        }
    });
});