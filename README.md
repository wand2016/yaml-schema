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

``` sh
cat examples/object/input.yaml | node dist/index.js -s examples/object/schema.yaml
```

```
data/address should have required property 'country'
data/votes should be integer
```
