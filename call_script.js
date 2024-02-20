const scriptPath = "C:\\Users\\teste.py"
const { execSync } = require("child_process")
const buffer = execSync(`python "${scriptPath}"`)
const output = buffer.toString()

return output
