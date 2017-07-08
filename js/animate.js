function slowScroll (id) {
	var os = 0;
	$("html, body").animate ({
		scrollTop: $(id).offset ().top -os 
	}, 500);
	return false;
}