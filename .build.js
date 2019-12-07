const  fs=require('fs')//file system
const  path=require('path')
fs.readdir('./markdown',function(error,files){
//console.log(files);                          
  for(var i=0;i<files.length;i++){
    var p=path.join('./markdown',files[i])
    var markdown=fs.readFileSync(p).toString()
    var template=readFileSync('./template.html').toString()
    var result=template.replace('%content%',markdown)
    fs.writeFileSync(files[i]+'.html'+result);
 }
});