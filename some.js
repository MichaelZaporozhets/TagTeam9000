	if (localStorage.getItem('taglist')) {
	   		var taglist = JSON.parse(localStorage.getItem('taglist')); 
	    	console.dir(taglist)
		}
		else
		{
			var taglist = {};
		}
	var newtag = function(name) {
		var tag = prompt('enter a tag');
		taglist[name] = tag;
		console.dir(taglist)
		localStorage.setItem('taglist', JSON.stringify(taglist));
		$('p, h3.userText a, .privateControls .item.muted a, #nkBar3 .crumbs span a, .userInfo h3.username a, .pairsInline.lastActivity dt, .headline.noimg.small h1 a, .lnblogRecentEntryMeta span a, .lnblogRecentEntryTitle a, .titleBar h1, .lnblogSidebar.lnblogSidebarMoreEntries.section .secondaryContent h3, .lnblogRecentUserEntryTitle a, .lnblogLinkDark.lnblogEntryAuthor a, .LikeText a, .lnblogLinkDark a, .lnblogLinkDarker a, .mainText.secondaryContent h1, .pairsInline.lastActivity dt,.pairsInline.lastActivity dd, .primaryContent.messageSimple .messageInfo .messageContent a, .commentContent a, .followBlock .muted, .lastThreadMeta a, .section.membersOnline.userList .secondaryContent .listInline li a, .username, #nkTopBarRight a').each(function(){
					$(this).html($(this).html().replace(name,tag))
		});
		$('.sneakytaggerswagger').remove()
		$('.followBlock ul').append('<li><a href="#" class="FollowLink sneakyuntaggerswagger" title="">Untag</a></li>')
	};
	var x;
	$(document).ready( function() {
		for(var prop in taglist) {
			if (taglist.hasOwnProperty(prop)) {
				$('p, h3.userText a, .privateControls .item.muted a, #nkBar3 .crumbs span a, .userInfo h3.username a, .pairsInline.lastActivity dt, .headline.noimg.small h1 a, .lnblogRecentEntryMeta span a, .lnblogRecentEntryTitle a, .titleBar h1, .lnblogSidebar.lnblogSidebarMoreEntries.section .secondaryContent h3, .lnblogRecentUserEntryTitle a, .lnblogLinkDark.lnblogEntryAuthor a, .LikeText a, .lnblogLinkDark a, .lnblogLinkDarker a, .mainText.secondaryContent h1, .pairsInline.lastActivity dt,.pairsInline.lastActivity dd, .primaryContent.messageSimple .messageInfo .messageContent a, .commentContent a, .followBlock .muted, .lastThreadMeta a, .section.membersOnline.userList .secondaryContent .listInline li a, .username, #nkTopBarRight a').each(function(){
					$(this).html($(this).html().replace(prop,taglist[prop]))
				});
			}
		}
		if ($('.profilePage').size() == 1) {	
			for(var prop in taglist) {
				if (taglist.hasOwnProperty(prop)) {
					if (prop == $('meta[property="og:title"]').attr("content")) {
						var x = 1;
					}
				}
			}
			if (x !== 1) {
				$('.followBlock ul').append('<li><a href="#" class="FollowLink sneakytaggerswagger" title="">Tag</a></li>')
			}
			else {
				$('.followBlock ul').append('<li><a href="#" class="FollowLink sneakyuntaggerswagger" title="">Untag</a></li>')
			}

			$('.sneakytaggerswagger').click( function(e) {
				e.preventDefault()
				var name = $('h1[itemprop=name]').text();
				newtag(name);
			});

			$('.sneakyuntaggerswagger').click( function(e) {
				e.preventDefault()
				var realname = $('meta[property="og:title"]').attr("content");
				$('p, h3.userText a, .privateControls .item.muted a, #nkBar3 .crumbs span a, .userInfo h3.username a, .pairsInline.lastActivity dt, .headline.noimg.small h1 a, .lnblogRecentEntryMeta span a, .lnblogRecentEntryTitle a, .titleBar h1, .lnblogSidebar.lnblogSidebarMoreEntries.section .secondaryContent h3, .lnblogRecentUserEntryTitle a, .lnblogLinkDark.lnblogEntryAuthor a, .LikeText a, .lnblogLinkDark a, .lnblogLinkDarker a, .mainText.secondaryContent h1, .pairsInline.lastActivity dt,.pairsInline.lastActivity dd, .primaryContent.messageSimple .messageInfo .messageContent a, .commentContent a, .followBlock .muted, .lastThreadMeta a, .section.membersOnline.userList .secondaryContent .listInline li a, .username, #nkTopBarRight a').each(function(){
					$(this).html($(this).html().replace(taglist[prop],realname))
				});
				delete taglist[realname];
				localStorage.setItem('taglist', JSON.stringify(taglist));
				$('.sneakyuntaggerswagger').remove()
				$('.followBlock ul').append('<li><a href="#" class="FollowLink sneakytaggerswagger" title="">Tag</a></li>')

			});
		}
	});	