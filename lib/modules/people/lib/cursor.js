return apos.docs.getManager('person').find(req, {
        reputation: {
            $gte: 30
        }
    }).sort({
        updatedAt: -1
    })
    .toArray(function (err, people) {
        console.log(people);
    });