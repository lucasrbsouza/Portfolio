async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/lucasrbsouza/Portfolio/main/Data/profile.json?token=GHSAT0AAAAAACPUSKTLUXWNINV4GQAU64CIZQASXVQ';
    const fetching= fetch(url)
    const profileData = await response.json();
    return profileData
    
}