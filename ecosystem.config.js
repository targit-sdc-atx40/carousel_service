module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-221-232-106.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/carouselService.pem',
      ref: 'origin/master',
      repo: 'git@github.com:targit-sdc-atx40/carousel_service.git',
      path: '/home/ubuntu/carouselService',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}