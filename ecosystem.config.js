module.exports = {
  apps: [{
    name: 'carouselService',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-221-92-39.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/targitCarousel.pem',
      ref: 'origin/master',
      repo: 'https://github.com/targitatx/carousel_service.git',
      path: '/home/ubuntu/carouselService',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}