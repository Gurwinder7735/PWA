self.addEventListener('install',evt =>{
    console.log('Service worker has been installed')
})

self.addEventListener('activate',evt =>{
    console.log('Service worker has been Activated')
})
//sfs

self.addEventListener('fetch',evt =>{
    console.log('fetch Event',evt)
})