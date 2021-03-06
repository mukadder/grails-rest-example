var ContentTable = function(element, dataSource) {
	
	this.element = element;
	this.dataSource = dataSource;
	this.currentRow;
	
	this.render = function() {
		
		var table = this;
		
		this.dataSource.list(function(data) {
			$.each(data, function() {
				table.renderRow.call(table, this);
			})
		});
	}
	
	this.renderRow = function(content) {
		this.clonePrototypeRow();
		this.setTitle(content.title);
		this.appendRow();
	}
	
	this.clonePrototypeRow = function() {
		this.currentRow = $('tbody.prototype tr', this.element).clone();		
	}
	
	this.setTitle = function(title) {
		$('td.title', this.currentRow).text(title)
	}
	
	this.appendRow = function(row) {
		var destination = $('tbody.data', this.element);
		destination.append(this.currentRow);
	}
}