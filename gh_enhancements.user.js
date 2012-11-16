// ==UserScript==
// @name        GitHub Custom Enhancements
// @namespace   ghplus
// @description Enhances github pages
// @include     http://github.com/*
// @include     https://github.com/*
// @version     1
// @grant		none
// ==/UserScript==

$(function () {
  var repo = $('a.js-current-repository').html();
  $('.commit-ref').each(function(){
    var $this = $(this);
    var $user = $this.children('.user');
    var $branch = $this.children().not($user).filter('span');
    $user = $user.children('span');

    console.log($this);
    console.log($user);
    console.log($branch);

    // Make username a link.
    var username = $user.html();
    $user.html('<a href="/' + username + '/' + repo + '" style="color:#CCCCCC;" >' + username + '</a>');

    // Make branch a link.
    var branch = $branch.html();
    var branch_url = '/' + username + '/' + repo + '/tree/' + branch;
    var branch_link = '<a href="' + branch_url + '" style="color:#ffffff;">' + branch + '</a>'
    $branch.html(branch_link);
  });
});
