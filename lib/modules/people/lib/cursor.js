// apos.define('apostrophe-doc-type-manager-cursor', function(self, options) {
//     'use strict';
//     return apos.docs.find(req, {
//             reputation: {
//                 $gte: 30
//             }
//         }).sort({
//             updatedAt: -1
//         })
//         .toArray(function (err, people) {
//             console.log(people);
//         });
// });