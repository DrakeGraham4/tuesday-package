const packages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' },

    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' },

    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' },

    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' },

    { heavy: true, priority: true, fragile: true, to: 'Brittany' },

    { heavy: false, priority: true, fragile: false, to: 'Jonesy', trackingNumber: '8081baz' },

    { heavy: true, priority: false, fragile: true, to: 'Justin', trackingNumber: 'suz2367' }
]


function draw(packages) {
    console.log('drawing these packages', packages);
    let template = ''
    for (let i = 0; i < packages.length; i++) {
        let package = packages[i]
        template += `
        <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <h6>Package shipped to: ${package.to}</h6>
                        <h6>Heavy: ${package.heavy}</h6>
                        <h6>Priority: ${package.priority}</h6>
                        <h6>Fragile: ${package.fragile}
                        <h6>Tracking Number: ${package.trackingNumber}
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('packages').innerHTML = template
}


function filterHeavy(choice) {
    console.log('choice', choice)
    // REVIEW this works, not 100% on why, the => confuses me still
    // \/Array of packages where        \/p (package) is true
    let heavyPackages = packages.filter(p => p.heavy == choice)
    console.log('your filtered packages', heavyPackages);
    draw(heavyPackages)
    // let template = ''
    // for (let i = 0; i < heavyPackages.length; i++) {
    //     const package = heavyPackages[i];
    //     template += `
    //     <div class="col-md-3">
    //     <div class="card">
    //     <div class="card-body">
    //     <h6>Package shipped to: ${package.to}</h6>
    //     <h6>Heavy: ${package.heavy}</h6>
    //     <h6>Priority: ${package.priority}</h6>
    //     <h6>Fragile: ${package.fragile}
    //     <h6>Tracking Number: ${package.trackingNumber}
    //     </div>
    //     </div>
    //     </div>
    //     `
    // }
    // document.getElementById('packages').innerHTML = template


}
function filterTracking() {
    let trackingNumber = packages.filter(p => p.trackingNumber)
    draw(trackingNumber)
    // let template = ''
    // for (let i = 0; i < trackingNumber.length; i++) {
    //     const package = trackingNumber[i];
    //     template += `
    //     <div class="col-md-3">
    //     <div class="card">
    //     <div class="card-body">
    //     <h6>Package shipped to: ${package.to}</h6>
    //     <h6>Heavy: ${package.heavy}</h6>
    //     <h6>Priority: ${package.priority}</h6>
    //     <h6>Fragile: ${package.fragile}
    //     <h6>Tracking Number: ${package.trackingNumber}
    //     </div>
    //     </div>
    //     </div>
    //     `
    // }
    // document.getElementById('packages').innerHTML = template
}
function filterPriority() {
    // TODO filter packages where priority == true
    let priorityPackages
}



draw(packages)