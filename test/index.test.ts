import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkCloudFrontInvalidation } from '../src';

describe('CdkCloudFrontInvalidation', () => {
  test('creates a new instance', () => {
    const app = new App();
    const stack = new Stack(app, 'TestStack');
    const distributionId = 'test-distribution-id';
    new CdkCloudFrontInvalidation(stack, 'TestInvalidation', { distribution: { distributionId } } as any);

    const assert = Template.fromStack(stack);
    assert.resourceCountIs('Custom::AWS', 1);
  });
});