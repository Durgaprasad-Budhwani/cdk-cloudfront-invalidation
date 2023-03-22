# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdkCloudFrontInvalidation <a name="CdkCloudFrontInvalidation" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation"></a>

#### Initializers <a name="Initializers" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.Initializer"></a>

```typescript
import { CdkCloudFrontInvalidation } from 'cdk-cloudfront-invalidation'

new CdkCloudFrontInvalidation(scope: Construct, id: string, props: CdkCloudFrontInvalidationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidationProps">CdkCloudFrontInvalidationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidationProps">CdkCloudFrontInvalidationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.isConstruct"></a>

```typescript
import { CdkCloudFrontInvalidation } from 'cdk-cloudfront-invalidation'

CdkCloudFrontInvalidation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.property.cloudFrontInvalidationResource">cloudFrontInvalidationResource</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource</code> | The CloudFront invalidation resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cloudFrontInvalidationResource`<sup>Required</sup> <a name="cloudFrontInvalidationResource" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidation.property.cloudFrontInvalidationResource"></a>

```typescript
public readonly cloudFrontInvalidationResource: AwsCustomResource;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource

The CloudFront invalidation resource.

---


## Structs <a name="Structs" id="Structs"></a>

### CdkCloudFrontInvalidationProps <a name="CdkCloudFrontInvalidationProps" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidationProps"></a>

#### Initializer <a name="Initializer" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidationProps.Initializer"></a>

```typescript
import { CdkCloudFrontInvalidationProps } from 'cdk-cloudfront-invalidation'

const cdkCloudFrontInvalidationProps: CdkCloudFrontInvalidationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cloudfront-invalidation.CdkCloudFrontInvalidationProps.property.distribution">distribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.IDistribution</code> | *No description.* |

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="cdk-cloudfront-invalidation.CdkCloudFrontInvalidationProps.property.distribution"></a>

```typescript
public readonly distribution: IDistribution;
```

- *Type:* aws-cdk-lib.aws_cloudfront.IDistribution

---



