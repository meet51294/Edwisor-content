const readline = require('readline')
const fs = require('fs')
const rl = readline.createInterface(process.stdin, process.stdout);


//Asking The Path .. Specify Complete Path Where Your Directory Is Located
// For Example => E:/ExampleFolder, If you will Specify The Disk C: or Where
//Windows is installed it can give error due to Authorization
rl.question('Please Specify The Path Of Your Directory  => ', (source) => {

    //Will Show Your Files Stored In The Directory in order(1,2,3)
    var files = fs.readdirSync(source)
    for (let x = 0; x < files.length; x++) {
        console.log([x + 1] + " " + files[x])
    }
    console.log("Source Directory.. => ", source)

    //Changing The Directory Path:
    process.chdir(source)

    //Asking The File Number:
    rl.question('Enter The Number Of File.. => ', (ans) => {

        //Asking The Path Where You Want To Copy.. Specify Complete Path Where Your Directory Is Located
        // For Example => E:/ExampleFolder, If you will Specify The Disk C: or Where Windows is installed 
        //it can give error due to Authorization
        rl.question('Enter The Path Of Destination.. => ', (destination) => {
            console.log("Destination Directory.. =>", destination)

            // Copy Operation Started:

            let readStream = fs.createReadStream(files[ans-1])


            //Changing The Directory Path To Destination:
            process.chdir(destination)
            let writeStream = fs.createWriteStream('CopiedFile.txt')
            readStream.on('data', (chunk) => {
                writeStream.write(chunk)
            })
            readStream.on('end', () => {
                console.log('File Reading Complete..')
                writeStream.end();
                console.log("Operation Completed..")
                var data = fs.createReadStream('CopiedFile.txt')
                data.on('data', (chunk) => {

                    //Showing The Data Copying In Your File

                    console.log("Data Copied In Your File :", chunk.toString())
                    console.log("Check Your Destination")
                })
                data.on('end', () => {
                    console.log("Reading Finished..")

                    //Closing The Operation..
                    rl.close();
                })
            })
        })

    })
})
