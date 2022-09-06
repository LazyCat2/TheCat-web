window.onload = () => {
  document.getElementById('login').onclick = () => {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=997549493757153341&redirect_uri=http%3A%2F%2F127.0.0.1%3A8081%2F&response_type=code&scope=guilds%20identify'
  }
  document.getElementById('more').onclick = () => {
    
  }
}