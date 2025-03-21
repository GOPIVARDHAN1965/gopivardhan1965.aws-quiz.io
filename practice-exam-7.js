const quizData = [
    {
        "question": "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
        "options": [
            "A. Delete the encryption keys once your data is encrypted.",
            "B. With AWS you do not need to worry about encryption.",
            "C. Enable S3 Encryption.",
            "D. Encrypt the data prior to uploading it.",
            "E. Delete all IAM users that have access to S3."
        ],
        "answer": [
            2,
            3
        ]
    },
    {
        "question": "Which AWS service helps developers compile and test their code?",
        "options": [
            "A. AWS CodeDeploy.",
            "B. AWS CodeCommit.",
            "C. CloudEndure.",
            "D. AWS CodeBuild."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
        "options": [
            "A. Using default encryption for any number of S3 buckets.",
            "B. The number of EBS volumes attached to your instances.",
            "C. The storage class used for the objects stored.",
            "D. Creating and deleting S3 buckets.",
            "E. The total size in gigabytes of all objects stored."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "What does the Amazon CloudFront service provide? (Choose TWO)",
        "options": [
            "A. Tracks user activity and APl usage.",
            "B. Increases application availability by caching at the edge.",
            "C. Enables faster disaster recovery.",
            "D. Stores archived data at very low costs.",
            "E. Delivers content to end users with low latency."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
        "options": [
            "A. Amazon Lightsail.",
            "B. Amazon Connect.",
            "C. AWS Direct Connect.",
            "D. AWS Elastic Beanstalk."
        ],
        "answer": 1
    },
    {
        "question": "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
        "options": [
            "A. Using the AWS Cost & Usage Report.",
            "B. Using the AWS Total Cost of Ownership (TCO) dashboard.",
            "C. Using the AWS CloudWatch logs dashboard.",
            "D. Using the Amazon VPC dashboard."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
        "options": [
            "A. Convertible.",
            "B. Expedited.",
            "C. Bulk.",
            "D. Spot.",
            "E. Standard."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
        "options": [
            "A. AWS Artifact.",
            "B. AWS Config.",
            "C. Amazon CloudWatch.",
            "D. AWS CloudTrail."
        ],
        "answer": 0
    },
    {
        "question": "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
        "options": [
            "A. AWS Resource Groups.",
            "B. AWS Placement Groups.",
            "C. AWS Management Console.",
            "D. AWS Tag Editor."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS service collects metrics from running EC2 instances?",
        "options": [
            "A. Amazon Inspector.",
            "B. Amazon CloudWatch.",
            "C. AWS CloudFormation.",
            "D. AWS CloudTrail."
        ],
        "answer": 1
    },
    {
        "question": "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
        "options": [
            "A. Amazon Detective.",
            "B. AWS X-Ray.",
            "C. AWS Security Hub.",
            "D. AWS Shield."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following compute resources are serverless? (Choose TWO)",
        "options": [
            "A. Amazon EC2.",
            "B. AWS Fargate.",
            "C. AWS Lambda.",
            "D. Amazon ECS.",
            "E. Amazon EMR."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
        "options": [
            "A. Use EC2 Dedicated Hosts.",
            "B. Use EC2 Reserved Instances.",
            "C. Use EC2 Spot Instances.",
            "D. Use EC2 On-demand Instances."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
        "options": [
            "A. Tagging Enforcement.",
            "B. Architecture Optimization.",
            "C. Budgeting Processes.",
            "D. Resource Controls."
        ],
        "answer": 1
    },
    {
        "question": "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
        "options": [
            "A. RedShift.",
            "B. RDS.",
            "C. CloudHSM.",
            "D. DMS."
        ],
        "answer": 1
    },
    {
        "question": "What can you use to assign permissions directly to an IAM user?",
        "options": [
            "A. IAM Identity.",
            "B. IAM Group.",
            "C. IAM Role.",
            "D. IAM Policy."
        ],
        "answer": 3
    },
    {
        "question": "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
        "options": [
            "A. AWS allows customers to launch powerful EC2 instances to handle spikes in load.",
            "B. AWS allows customers to pay upfront to get bigger discounts.",
            "C. AWS allows customers to launch and terminate EC2 instances based on demand.",
            "D. AWS allows customers to choose cheaper types of EC2 instances that best fit their needs."
        ],
        "answer": 2
    },
    {
        "question": "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
        "options": [
            "A. PostgreSQL.",
            "B. Oracle.",
            "C. Microsoft SQL Server.",
            "D. Teradata."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following AWS services would help you migrate on-premise databases to AWS?",
        "options": [
            "A. AWS DMS.",
            "B. Amazon S3 Transfer Acceleration.",
            "C. AWS Directory Service.",
            "D. AWS Transit Gateway."
        ],
        "answer": 0
    },
    {
        "question": "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
        "options": [
            "A. Run WordPress on an Amazon Lightsail instance.",
            "B. Install WordPress on an Amazon EC2 instance.",
            "C. Use the Amazon S3 Web hosting feature.",
            "D. Host the website directly on AWS Cloud Development Kit (AWS CDK)."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
        "options": [
            "A. AWS KMS.",
            "B. AWS Certificate Manager.",
            "C. AWS CodeDeploy.",
            "D. AWS CodeCommit.",
            "E. CloudHSM."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "Which of the following services allows you to install and run custom relational database software?",
        "options": [
            "A. Amazon EC2.",
            "B. Amazon Cognito.",
            "C. Amazon RDS.",
            "D. Amazon Inspector."
        ],
        "answer": 0
    },
    {
        "question": "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
        "options": [
            "A. Auto Scaling.",
            "B. ELB.",
            "C. Amazon Route53.",
            "D. Amazon Elastic Container Service."
        ],
        "answer": 0
    },
    {
        "question": "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
        "options": [
            "A. AWS IAM.",
            "B. AWS Outposts.",
            "C. AWS Federation.",
            "D. Amazon Redshift."
        ],
        "answer": 0
    },
    {
        "question": "What are some key design principles for designing public cloud systems? (Choose TWO)",
        "options": [
            "A. Reserved capacity instead of on demand.",
            "B. Loose coupling over tight coupling.",
            "C. Servers instead of managed services.",
            "D. Disposable resources instead of fixed servers.",
            "E. Multi-AZ deployments instead of multi-region deployments."
        ],
        "answer": [
            1,
            3
        ]
    },
    {
        "question": "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
        "options": [
            "A. AWS CloudTrail Trails.",
            "B. IAM Credential Report.",
            "C. AWS Artifact reports.",
            "D. AWS Cost and Usage Report."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
        "options": [
            "A. AWS Shield.",
            "B. AWS Certificate Manager.",
            "C. AWS CloudHSM.",
            "D. AWS WAF."
        ],
        "answer": 2
    },
    {
        "question": "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
        "options": [
            "A. There is no need to architect for these capabilities in AWS, as AWS is redundant by default.",
            "B. Deploy the application in a single Availability Zone.",
            "C. Deploy the application in multiple Availability Zones in a single AWS region.",
            "D. Deploy the application in multiple Availability Zones in multiple AWS regions."
        ],
        "answer": 3
    },
    {
        "question": "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
        "options": [
            "A. Instance Store.",
            "B. S3.",
            "C. DynamoDB.",
            "D. Amazon Route 53.",
            "E. AWS VPN."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
        "options": [
            "A. Number of Requests.",
            "B. Traffic Distribution.",
            "C. Number of Volumes.",
            "D. Instance type.",
            "E. Storage Class."
        ],
        "answer": [
            0,
            1
        ]
    },
    {
        "question": "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
        "options": [
            "A. AWS Service Control Policies (SCPs).",
            "B. AWS Artifact.",
            "C. AWS Budgets.",
            "D. AWS Acceptable Use Policy."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following security resources are available to any user for free? (Choose TWO)",
        "options": [
            "A. AWS Bulletins.",
            "B. AWS TAM.",
            "C. AWS Support APl.",
            "D. AWS Security Blog.",
            "E. AWS Classroom Training."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "How can you protect data stored on Amazon S3 from accidental deletion?",
        "options": [
            "A. By enabling S3 Versioning.",
            "B. By configuring S3 Bucket Policies.",
            "C. By configuring S3 Lifecycle Policies.",
            "D. By disabling S3 Cross-Region Replication (CRR)."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
        "options": [
            "A. Securing regions and edge locations.",
            "B. Performing auditing tasks.",
            "C. Monitoring AWS resources usage.",
            "D. Securing access to AWS resources."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
        "options": [
            "A. Business & Enterprise Support.",
            "B. Basic & Developer Support.",
            "C. Developer & Enterprise Support.",
            "D. Developer & Business Support."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is NOT a benefit of using AWS Lambda?",
        "options": [
            "A. AWS Lambda runs code without provisioning or managing servers.",
            "B. AWS Lambda provides resizable compute capacity in the cloud.",
            "C. There is no charge when your AWS Lambda code is not running.",
            "D. AWS Lambda can be called directly from any mobile app."
        ],
        "answer": 3
    },
    {
        "question": "How does AWS help customers achieve compliance in the cloud?",
        "options": [
            "A. It's not possible to meet regulatory compliance requirements in the Cloud.",
            "B. AWS applies the most common Cloud security standards, and is responsible for complying with customers\u2019 applicable laws and regulations.",
            "C. AWS has many common assurance certifications such as ISO 9001 and HIPAA.",
            "D. Many AWS services are assessed regularly to comply with local laws and regulations."
        ],
        "answer": 2
    },
    {
        "question": "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
        "options": [
            "A. Your security team.",
            "B. Your development team.",
            "C. AWS.",
            "D. Your internal DevOps team."
        ],
        "answer": 2
    },
    {
        "question": "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
        "options": [
            "A. Amazon Elastic Transcoder.",
            "B. Amazon Pinpoint.",
            "C. AmazonS3.",
            "D. Amazon Rekognition."
        ],
        "answer": 0
    },
    {
        "question": "What are the benefits of the AWS Organizations service? (Choose TWO)",
        "options": [
            "A. Control access to AWS services.",
            "B. Help organizations design and maintain an accelerated path to successful cloud adoption.",
            "C. Manage your organization\u2019s payment methods.",
            "D. Help organization achieve their desired business outcomes with AWS.",
            "E. Consolidate billing across multiple AWS accounts."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "Which AWS service allows you to build a data warehouse in the cloud?",
        "options": [
            "A. AWS Shield.",
            "B. Amazon Redshift.",
            "C. Amazon RDS.",
            "D. Amazon Comprehend."
        ],
        "answer": 1
    },
    {
        "question": "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
        "options": [
            "A. AWS Application Discovery service.",
            "B. Amazon DevPay.",
            "C. AWS Marketplace.",
            "D. Resource Groups."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
        "options": [
            "A. AWS CodePipeline.",
            "B. AWS CodeCommit.",
            "C. AWS X-Ray.",
            "D. Amazon Inspector."
        ],
        "answer": 1
    },
    {
        "question": "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
        "options": [
            "A. Amazon Cognito.",
            "B. AWS Systems Manager.",
            "C. AWS Cloud9.",
            "D. Amazon Route 53."
        ],
        "answer": 3
    },
    {
        "question": "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
        "options": [
            "A. Federation.",
            "B. Access keys.",
            "C. IAM Permissions.",
            "D. WAF rules."
        ],
        "answer": 0
    },
    {
        "question": "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
        "options": [
            "A. Awareness and Training.",
            "B. Communications controls.",
            "C. Data center security controls.",
            "D. Environmental controls.",
            "E. Resource Configuration Management."
        ],
        "answer": [
            2,
            3
        ]
    },
    {
        "question": "What can you access by visiting the URL: <http://status.aws.amazon.com>?",
        "options": [
            "A. AWS Billing Dashboard.",
            "B. AWS Cost Dashboard.",
            "C. AWS Service Health Dashboard.",
            "D. AWS Security Dashboard."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
        "options": [
            "A. Store media assets in the region closest to your end users.",
            "B. Store media assets on an additional EBS volume and increase the capacity of your server.",
            "C. Replicate media assets to at least two availability zones.",
            "D. Reduce the size of media assets using the Amazon Elastic Transcoder.",
            "E. Store media assets in S3 and use CloudFront to distribute these assets."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
        "options": [
            "A. Use manual monitoring techniques to protect your AWS resources.",
            "B. Use IAM roles to grant temporary access instead of long-term credentials.",
            "C. Scale horizontally to protect from failures.",
            "D. Enable real-time traceability.",
            "E. Never store sensitive data in the cloud."
        ],
        "answer": [
            1,
            3
        ]
    },
    {
        "question": "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
        "options": [
            "A. Use the AWS Pricing Calculator service to monitor the costs incurred by each department.",
            "B. Use Amazon Aurora to forecast AWS spending based on usage.",
            "C. Apply cost allocation tags to segment AWS costs by different e projects and departments.",
            "D. Configure AWS Price List API to receive billing updates for each department automatically."
        ],
        "answer": 2
    }
];