function spread_windows() {
	// First calculate the number of rows	
}

function number_of_rows() {
	var rows = 1
	while (!try_fit_windows(rows)) 
		rows++;

	return rows
}

function try_fit_windows(max_rows) {
	int row = 0
	int row_width = 0
	int row_height = available_height/rows

	for (window in windows) {
		var width = window.width * row_height/window.height
		if (row_width + width > available_width) {
			row++
			row_width = width
		} else {
			row_width += width
		}

		if (row >= max_rows)
			return false
	}

	return true
}