const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Durgaprasad Budhwani',
  authorAddress: 'durgaprasad.budhwani@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-cloudfront-invalidation',
  repositoryUrl: 'git@github.com:Durgaprasad-Budhwani/cdk-cloudfront-invalidation.git',
  majorVersion: 1,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();