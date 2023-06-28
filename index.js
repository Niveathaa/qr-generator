/*terminal:
         npm init -y(jason file)
         npm init i -g qrcode(for global installation )
         in terminal type
         
         qrcode "string"- qrcode is generated
         qrcode -0 code.png "text" -the code is generated in pdf format like code.png
         i tried  
         qrcode -o code.png "df"
         for red clr qrcode:
         qrcode -d F00 -o out.png "fufvefv"  
                where F00 is red color code
         for changing size:
         qrcode -d FOF -s 10 -o out.png "dcdc"

         


*/

var qrcode = require('qrcode')
qrcode.toDataURL('der',function(err,url)
{
   console.log(url) 
})

