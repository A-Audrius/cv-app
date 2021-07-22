
document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;

// 
// 

let expirienceData = '';
data.experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += `<h6><a href="${item.site_address}">${item.site_address}</a></h6>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;



// contact

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">linkedin....</a></li>`
document.querySelector('#my-photo').src = data.photo;

// skills

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;



/**
 * education
 */

 let educationData = '';
 data.education.forEach(item => {
     educationData += `<li>${item[0]}, ${item[1]}</li><br>`;
 });
 document.querySelector('.education-list').innerHTML = educationData;


 
