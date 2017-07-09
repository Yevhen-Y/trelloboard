angular.module('app').controller('listsCtrl', function(listFactory){

this.lists = listFactory.getLists();

this.addList = function(){
	console.log('ths.listName', this.listName);
	listFactory.addList(this.listName);
	this.listName = '';
};

})