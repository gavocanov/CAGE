// monster stats
tools['Page'].runtime['festival_battle_monster.php'] = function() {

	console.log('Page: festival_battle_monster.php');

	// add health percentage to monster name
	var _health = $('img[src*="monster_health_background.jpg"],[src*="nm_red.jpg"]').parent()[0];
	var _monstername = $('#app_body div:contains("\'s Life"):last, #app_body div:contains("\'s life"):last');
	if(_health && _health.style && _health.style.width !== "" && _monstername && _monstername.text()) {
		var _percentage = _health.style.width.substr(0, 5);
		_monstername.text(_monstername.text() + ' (' + _percentage + (_percentage.indexOf('%') > -1 ? ')' : '%)'));
	}

	// add percentage to defense/forcefield/..
	var _defense = $('img[src*="bar_dispel.gif"],[src*="nm_green.jpg"],[src*="seamonster_ship_health.jpg"]').parent()[0];
	var _defText = $('#app_body div:contains("Party Health/Strength"):last, #app_body div:textEquals("Skaar\'s Mana Forcefield "):first, #app_body div:textEquals("Illvasa, Plateau City\'s Defense "):first, #app_body div:textEquals("Castle Defense"):first, #app_body div:textEquals("Your Ship\'s Defense"):first');
	if(_defense && _defense.style && _defense.style.width !== "" && _defText && _defText.text()) {
		var _percentage = _defense.style.width.substr(0, 5);
		_defText.text(_defText.text() + ' (' + _percentage + (_percentage.indexOf('%') > -1 ? ')' : '%)'));
	}

	// fix for monster timer
	addFunction(new Function($('#monsterTicker').next('script').html()), null, true, true);
	addFunction(new Function($('#monsterTicker').parent().next('script').html()), null, true, true);

	// rearrange result
	if($('span.result_body:contains("You attacked too soon and missed your attack")').length == 0) {
		$('span.result_body:has(img[src*="graphics/button_monster_attack_again.gif"])').append($('span.result_body img[src*="graphics/button_monster_attack_again.gif"]').parent().parent().css({
			'float' : 'right',
			'marginRight' : 24
		}).detach());
		$('span.result_body:has(img[src*="graphics/button_monster_attack_again.gif"]) > div:eq(0) img:first').css({
			'height' : 133
		});
		$('span.result_body:has(img[src*="graphics/button_monster_attack_again.gif"]) > div:eq(' + ($('span.result_body:contains("Elite Guard")').length == 0 ? 2 : 4) + ')').css({
			'float' : 'left',
			'width' : 550
		});
	}

};
