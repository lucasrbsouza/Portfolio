function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name');
    name.innerText= profileData.name

    const job = document.getElementById('profile.job');
    job.innerText  = profileData.job
    
    const location = document.getElementById('profile.location');
    location.innerText = profileData.location
    
    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`
    
    const email = document.getElementById('profile.email');
    email.innerText = profileData.email
    email.href = `mailto: ${profileData.email}`
    
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softskills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill =>`<li>${skill}</li>`).join('')

}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.Portfolio')
    
    portfolio.innerHTML = profileData.portfolio.map(portfolio=>{
        return `<li>
        <h3 ${portfolio.github ? 'class="github"' : ''}>${portfolio.name}</h3>
        <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
    </li>`
        
    }).join('')
}

function updateEducationExperience(profileData) {
    const eduExperience = document.getElementById('profile.eduExperience')
    eduExperience.innerHTML = profileData.eduExperience.map(education =>{
        return `<li>
        <h3 class="title">${education.name}</h3>
         <p class="period">${education.period}</p>
         <p>${education.description}</p>
    </li>`
        
    }).join('')
    
}
function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience =>{
        return `<li>
        <h3 class="title">${experience.name}</h3>
         <p class="period">${experience.period}</p>
         <p>${experience.description}</p>
    </li>`
        
    }).join('')
    
}


(async ()=>{
    const profileData = await fetchProfileData()
    console.log(profileData);
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
    updateEducationExperience(profileData);
})()