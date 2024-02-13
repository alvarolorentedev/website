const fm = require('front-matter')
const fs = require('fs');

const temporalFolder = './blog-scheduler/';
const destinationFolder = './blog/';

fs.readdirSync(temporalFolder).forEach(file => {
  console.log(file);
  fs.readFile(`${temporalFolder}${file}`, 'utf8', function(err, data){
    if (err) throw err
   
    const {attributes} = fm(data)
    console.log(attributes, !attributes, attributes.draft, attributes.published > Date.now() )
    if(!attributes || attributes.draft || attributes.published > Date.now() )
        return
    console.log("move file")
    fs.renameSync(`${temporalFolder}${file}`,`${destinationFolder}${file}`)

  })
});
 /*
fs.readFile('./example.md', 'utf8', function(err, data){
  if (err) throw err
 
  var content = fm(data)
 
  console.log(content)
})
*/