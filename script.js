// Fetch mod data (you'll need to implement this based on your data source)
fetch('https://www.curseforge.com/members/ebalia/projects')
  .then(response => response.json()) // Assuming JSON data
  .then(data => {
    const modList = document.querySelector('.mod-list');
    data.forEach(mod => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="mod-name">${mod.name}</span>
        <span class="mod-version">${mod.version}</span>
      `;
      modList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching mod data:', error));
// Fetch news data (replace with your actual news source)
fetch('https://www.example.com/news')
  .then(response => response.json())
  .then(data => {
    const newsList = document.querySelector('.news-list');
    data.forEach(newsItem => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="news-title">${newsItem.title}</span>
        <span class="news-date">${newsItem.date}</span>
      `;
      newsList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching news data:', error));
// Fetch YouTube Feed (using YouTube Data API)
const youtubeApiKey = 'YOUR_YOUTUBE_API_KEY'; // Replace with your actual API key
const youtubeChannelId = 'UC8l2y-3-q2i6J-g5wU15w0g'; // Replace with EBALIA's channel ID
const youtubeFeedContainer = document.getElementById('youtube-feed');
const requestUrl = `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&channelId=${youtubeChannelId}&part=snippet&order=date&maxResults=5`; // Adjust maxResults as needed
fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(video => {
      const videoContainer = document.createElement('div');
      videoContainer.className = 'video-container';
      videoContainer.innerHTML = `
        <iframe width="300" height="200" src="https://www.youtube.com/watch?v=dVdIUIftM8E&list=PLzwUQ2ns25rFWNOOzd1zjF_RDk0Ewqh4i${video.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>${video.snippet.title}</p>
      `;
      youtubeFeedContainer.appendChild(videoContainer);
    });
  })
  .catch(error => console.error('Error fetching YouTube feed data:', error));
// Implement translation functionality (using a translation API)
// ... (Refer to translation API documentation)




