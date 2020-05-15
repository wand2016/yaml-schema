import program from 'commander'
import getStdin from 'get-stdin'
import fs from 'fs'
import yaml from 'js-yaml'
import Ajv from 'ajv'
import AjvErrors from 'ajv-errors'

const version = require('../package.json').version;

(async() => {
    program.version(version)
        .requiredOption('-s, --schema <schemaPath>', 'schema YAML file path')
    program.parse(process.argv)

    const schemaFile = fs.readFileSync(program.schema, 'utf8')
    const schema = yaml.safeLoad(schemaFile)
    const input = yaml.safeLoad(await getStdin())

    const ajv = new Ajv({allErrors: true, jsonPointers: true})
    AjvErrors(ajv)

    const passed = await ajv.validate(schema, input)

    console.log(ajv.errorsText(ajv.errors, {
        separator: '\n'
    }))

    process.exit(passed ? 0 : 1)
})()
