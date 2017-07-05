
import { Orders } from '/collections/collection.js';


Template.Dashboard.helpers({
	admin: function() {
		return Roles.userIsInRole(Meteor.userId(), 'admin');
	}
});


// Template.body.helpers({
// 	orders: function() {
// 		return Orders.find();
// 	}
// });
// Template.body.helpers({

// 	count: function(){
// 		return Orders.find().count();
// 	}
// });
// Template.totalOrder.helpers({
// 	count: function(){
// 		return Orders.find().count();
// 	}
// });
// // Template.dispatchOrder.events({

// // 	'click .selectorder': function(event){
// // 		var orderCount = event.target.selectorder.value;
// // 		console.log(Orders.find());
// // 		console.log("hello");
// // 	}
// // });

// Template.body.events({
// 	'click li': function(event){
// 		// var btn = document.getElementById("assignOrders");
// 		// btn.removeAttribute('disabled');
// 		var liValue = event.target.
// 		console.log(liValue);
// 		$('#assignOrders').removeClass('disabled');
// 		 var btn=document.getElementById("assignOrders");
// 		// btn.removeClass('disabled');
// 		console.log("hello");
// 	}
	
// });