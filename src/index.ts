import { Aws } from 'aws-cdk-lib';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export interface CdkCloudFrontInvalidationProps {
  readonly distribution: Distribution;
}

export class CdkCloudFrontInvalidation extends Construct {
  /**
   * The CloudFront invalidation resource.
   */
  public cloudFrontInvalidationResource: AwsCustomResource;

  constructor(scope: Construct, id: string, props: CdkCloudFrontInvalidationProps) {
    super(scope, id);

    const distributionId = props.distribution.distributionId;
    const cloudFrontInvalidationPolicy = new PolicyStatement({
      actions: [
        'cloudfront:GetDistribution',
        'cloudfront:GetDistributionConfig',
      ],
      resources: [
        `arn:aws:cloudfront::${Aws.ACCOUNT_ID}:distribution/${distributionId}`,
      ],
    });

    this.cloudFrontInvalidationResource = new AwsCustomResource(
      this,
      `CloudFrontInvalidation-${Date.now()}`,
      {
        onCreate: {
          physicalResourceId: PhysicalResourceId.of(`${distributionId}-${Date.now()}`),
          service: 'CloudFront',
          action: 'createInvalidation',
          parameters: {
            DistributionId: distributionId,
            InvalidationBatch: {
              CallerReference: Date.now().toString(),
              Paths: {
                Quantity: 1,
                Items: ['/*'],
              },
            },
          },
        },
        policy: AwsCustomResourcePolicy.fromStatements([cloudFrontInvalidationPolicy]),
      },
    );
  }
}