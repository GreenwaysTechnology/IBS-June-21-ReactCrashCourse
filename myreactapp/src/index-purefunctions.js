

//impure :
// function updateProfile(profile, city) {
//     //logic to update city of profile object
//     profile.city = city;
//     return profile;
// }

//pure
// function updateProfile(profile, city) {
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     }
// }

// function updateProfile(profile, city) {
//     return Object.assign({}, profile, { city: city })
// }


function updateProfile(profile, city) {
    return { ...profile, city: city }
}
let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Chennai'
}
Object.freeze(profile);

const res = updateProfile(profile, 'Coimbatore')
console.log(res);

//arrays and pure funcitons

function addProfile(profiles = [], newProfile) {
    //return profiles.push(newProfile)
    return profile.concat(newProfile)
}
//itertors
//map,filter,reduce - immutable api