async function fetchProfileData() {
    //const url = '/data/profile.json';
    const url = 'https://raw.githubusercontent.com/lucasrbsouza/Portfolio/main/Data/profile.json'
    const fetching= await fetch(url)
    return await fetching.json()
    
}