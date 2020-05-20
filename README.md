# installation & usage #

``` sh
npm i @d.horiyama/yaml_schema
```


```sh
cat input.yaml | npx yaml_schema -s schema.yaml
```

# sample #


examples/object/schema.yaml

``` yaml
$schema: "http://json-schema.org/draft-07/schema#"
type: object
properties:
  name:
    type: "string"
  address:
    type: "object"
    properties:
      lines:
        type: "array"
        items:
          type: "string"
      zip:
        type: "string"
      city:
        type: "string"
      country:
        type: "string"
    required:
      - "country"
  votes:
    type: "integer"
    minimum: 1
```

examples/object/input.yaml

```yaml
name: "Barack Obama"
address:
  lines:
    - "1600 Pennsylvania Avenue Northwest"
  zip: "DC 20500"
  # country: "USA"
  city: "Washington"
votes: "lots"
```

- validation

```sh
cat node_modules/@d.horiyama/yaml_schema/examples/object/input.yaml \
| npx yaml_schema -s node_modules/@d.horiyama/yaml_schema/examples/object/schema.yaml
```


```
data/address should have required property 'country'
data/votes should be integer
```
