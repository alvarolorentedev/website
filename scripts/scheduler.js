const fm = require('front-matter')
const fs = require('fs');

const temporalFolder = './blog-scheduler/';
const destinationFolder = './blog/';

fs.readdirSync(temporalFolder).forEach(file => {
  console.log(file);
  fs.readFile(`${temporalFolder}${file}`, 'utf8', function(err, data){
    if (err) throw err
    const {attributes} = fm(data)
    if(!attributes || attributes.draft || attributes.published > Date.now() )
        return
    fs.renameSync(`${temporalFolder}${file}`,`${destinationFolder}${file}`)

  })
});
