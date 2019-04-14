//--- Fires first ---
// $(document).on('init', function(event) {
//   var page = event.target;
//   if (page.id === 'page1') {
//     $('#push-button').on('click', function() {
//       $('#myNavigator')[0]
//         .pushPage('page2.html', {
//           data: { message: 'it works' }
//         })
//         .then(function() {
//           ons.notification.alert('page pushed');
//         });
//     });
//   }

//   if (page.id === 'page2') {
//     $('#push-button-2').on('click', function() {
//       ons.notification.alert('page2 button pushed');
//     });
//   }
// });

document.addEventListener('prechange', function(event) {
  document.querySelector(
    'ons-toolbar .center'
  ).innerHTML = event.tabItem.getAttribute('label');
});
