async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/RenanJPaula/js-developer-portfolio/main/data/profile.json';
    const fetching= fetch(url)
    const profileData = await response.json();
    return profileData
    
}