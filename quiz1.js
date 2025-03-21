const quizData = [
    {
        "question": "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
        "options": [
            "A. AWS Organizations.",
            "B. AWS Trusted Advisor.",
            "C. IAM User Groups.",
            "D. AWS Config."
        ],
        "answer": 0
    },
    {
        "question": "Which service provides object-level storage in AWS?",
        "options": [
            "A. Amazon EBS.",
            "B. Amazon Instance Store.",
            "C. Amazon EFS.",
            "D. Amazon S3."
        ],
        "answer": 3
    },
    {
        "question": "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
        "options": [
            "A. AWS Elastic Load Balancer.",
            "B. AWS Budgets.",
            "C. AWS Auto Scaling.",
            "D. AWS Cost Explorer."
        ],
        "answer": 2
    },
    {
        "question": "Which S3 storage class is best for data with unpredictable access patterns?",
        "options": [
            "A. Amazon S3 Intelligent-Tiering.",
            "B. Amazon S3 Glacier Flexible Retrieval.",
            "C. Amazon S3 Standard.",
            "D. Amazon S3 Standard-Infrequent Access."
        ],
        "answer": 0
    },
    {
        "question": "What is the AWS database service that allows you to upload data structured in key-value format?",
        "options": [
            "A. Amazon DynamoDB.",
            "B. Amazon Aurora.",
            "C. Amazon Redshift.",
            "D. Amazon RDS."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
        "options": [
            "A. You have to pay a start-up fee when launching a new instance for the first time.",
            "B. The on-demand instances follow the AWS pay-as-you-go pricing model.",
            "C. With on-demand instances, no longer-term commitments or upfront payments are needed.",
            "D. When using on-demand Linux instances, you are charged per second based on an hourly rate."
        ],
        "answer": 0
    },
    {
        "question": "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
        "options": [
            "A. AWS Trusted Advisor.",
            "B. Amazon Inspector.",
            "C. Amazon SNS.",
            "D. Amazon CloudWatch.",
            "E. Concierge Support Team."
        ],
        "answer": [
            0,
            1
        ]
    },
    {
        "question": "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
        "options": [
            "A. Encrypted keys.",
            "B. Email verification.",
            "C. AWS KMS.",
            "D. AWS MFA."
        ],
        "answer": 3
    },
    {
        "question": "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
        "options": [
            "A. AWS Knowledge Center.",
            "B. AWS Health Dashboard.",
            "C. Infrastructure Event Management.",
            "D. AWS Support Concierge Service."
        ],
        "answer": 2
    },
    {
        "question": "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
        "options": [
            "A. Amazon RDS.",
            "B. Amazon Redshift.",
            "C. Amazon DynamoDB.",
            "D. Amazon CloudWatch."
        ],
        "answer": 0
    },
    {
        "question": "Which of the below is a best-practice when designing solutions on AWS?",
        "options": [
            "A. Invest heavily in architecting your environment, as it is not easy to change your design later.",
            "B. Use AWS reservations to reduce costs when testing your production environment.",
            "C. Automate wherever possible to make architectural (\u00a9 ) experimentation easier.",
            "D. Provision a large compute capacity to handle any spikes in load"
        ],
        "answer": 2
    },
    {
        "question": "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
        "options": [
            "A. Penetration testing is not allowed in AWS.",
            "B. Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
            "C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
            "D. The AWS customers are only allowed to perform penetration testing on services managed by AWS."
        ],
        "answer": 2
    },
    {
        "question": "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
        "options": [
            "A. Amazon SQS.",
            "B. Amazon SES.",
            "C. AWS Direct Connect.",
            "D. Amazon Connect."
        ],
        "answer": 0
    },
    {
        "question": "The principle \u201cdesign for failure and nothing will fail\u201d is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
        "options": [
            "A. Multi-factor authentication.",
            "B. Availability Zones.",
            "C. Elastic Load Balancing.",
            "D. Penetration testing.",
            "E. Vertical Scaling."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "What is the AWS service that provides a virtual network dedicated to your AWS account?",
        "options": [
            "A. AWS VPN.",
            "B. AWS Subnets.",
            "C. AWS Dedicated Hosts.",
            "D. Amazon VPC."
        ],
        "answer": 3
    },
    {
        "question": "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
        "options": [
            "A. Managing environmental events of AWS data centers.",
            "B. Protecting the confidentiality of data in transit in Amazon S3.",
            "C. Controlling physical access to AWS Regions.",
            "D. Ensuring that the underlying EC2 host is configured properly.",
            "E. Patching applications installed on Amazon EC2."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
        "options": [
            "A. Amazon VPC.",
            "B. Amazon CloudWatch.",
            "C. Amazon S3.",
            "D. Amazon EC2.",
            "E. AWS Lambda."
        ],
        "answer": [
            3,
            4
        ]
    },
    {
        "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
        "options": [
            "A. Amazon EBS.",
            "B. Amazon SQS.",
            "C. Amazon S3.",
            "D. Amazon Instance store."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
        "options": [
            "A. Instance Password.",
            "B. Key pairs.",
            "C. Access Keys.",
            "D. MFA."
        ],
        "answer": 2
    },
    {
        "question": "What does Amazon ElastiCache provide?",
        "options": [
            "A. In-memory caching for read-heavy applications.",
            "B. An Ehcache compatible in-memory data store.",
            "C. An online software store that allows Customers to launch pre-configured software with just few clicks.",
            "D. A domain name system in the cloud."
        ],
        "answer": 0
    },
    {
        "question": "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
        "options": [
            "A. AWS WAF.",
            "B. AWS Trusted Advisor.",
            "C. AWS Organizations.",
            "D. Amazon Config."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
        "options": [
            "A. Dedicated Instances.",
            "B. Dedicated Hosts.",
            "C. On-demand Instances.",
            "D. Reserved Instances."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
        "options": [
            "A. Free support for all enterprise customers.",
            "B. Automatic data protection.",
            "C. Reduced Capital Expenditure (CapEx).",
            "D. AWS holds responsibility for managing customer applications."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
        "options": [
            "A. Always use Global Services in your architecture rather than Regional Services.",
            "B. Always choose to pay as you go.",
            "C. Treat servers as fixed resources.",
            "D. Automate wherever possible.",
            "E. Remove single points of failure."
        ],
        "answer": [
            3,
            4
        ]
    },
    {
        "question": "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
        "options": [
            "A. AWS Direct Connect.",
            "B. Amazon CloudFront.",
            "C. AWS Snowball.",
            "D. Amazon Route 53."
        ],
        "answer": 0
    },
    {
        "question": "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
        "options": [
            "A. Internet gateways.",
            "B. Virtual Private Cloud.",
            "C. Security Groups.",
            "D. Amazon CloudFront."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
        "options": [
            "A. Amazon Cognito.",
            "B. AWS IAM.",
            "C. Amazon Aurora.",
            "D. AWS WAF."
        ],
        "answer": 3
    },
    {
        "question": "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
        "options": [
            "A. Amazon EMR.",
            "B. Amazon MQ.",
            "C. Amazon SNS.",
            "D. Amazon SQS."
        ],
        "answer": 0
    },
    {
        "question": "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
        "options": [
            "A. Monitoring network performance.",
            "B. Installing software on EC2 instances.",
            "C. Creating hypervisors.",
            "D. Configuring Access Control Lists (ACLs).",
            "E. Hardware maintenance."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
        "options": [
            "A. Amazon Redshift.",
            "B. Amazon DynamoDB.",
            "C. Amazon EC2.",
            "D. Amazon RDS."
        ],
        "answer": 2
    },
    {
        "question": "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
        "options": [
            "A. MFA.",
            "B. Security tokens.",
            "C. A user name and password.",
            "D. Access keys."
        ],
        "answer": 2
    },
    {
        "question": "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
        "options": [
            "A. IAM.",
            "B. An internet gateway.",
            "C. EBS Snapshot.",
            "D. AMI."
        ],
        "answer": 3
    },
    {
        "question": "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
        "options": [
            "A. Reserved Compute capacity.",
            "B. Eliminating Single Points of Failure (SPOFs).",
            "C. Distributed infrastructure.",
            "D. Virtualized compute resources.",
            "E. Dedicated hosting."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "Which of the following aspects of security are managed by AWS? (Choose TWO)",
        "options": [
            "A. Encryption of EBS volumes.",
            "B. VPC security.",
            "C. Access permissions.",
            "D. Hardware patching.",
            "E. Securing global physical infrastructure."
        ],
        "answer": [
            3,
            4
        ]
    },
    {
        "question": "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
        "options": [
            "A. The ability of a system to recover gracefully from failure.",
            "B. The efficient use of computing resources to meet requirements.",
            "C. The ability to monitor systems and improve supporting processes and procedures.",
            "D. The ability to manage datacenter operations more efficiently."
        ],
        "answer": 2
    },
    {
        "question": "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
        "options": [
            "A. Edge locations are used by CloudFront to cache the most recent responses.",
            "B. Edge locations are used by CloudFront to improve your end users\u2019 experience when uploading files.",
            "C. Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
            "D. Edge locations are used by CloudFront to distribute content to global users with low latency."
        ],
        "answer": 2
    },
    {
        "question": "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
        "options": [
            "A. AWS CloudTrail.",
            "B. Amazon Comprehend.",
            "C. AWS Transit Gateway.",
            "D. AWS X-Ray.",
            "E. AWS Config."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
        "options": [
            "A. Amazon ECS.",
            "B. AWS Data Pipeline.",
            "C. AWS Cloud9.",
            "D. AWS Personal Health Dashboard."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following services will help businesses ensure compliance in AWS?",
        "options": [
            "A. CloudFront.",
            "B. CloudEndure Migration.",
            "C. CloudWatch.",
            "D. CloudTrail."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following procedures will help reduce your Amazon S3 costs?",
        "options": [
            "A. Use the Import/Export feature to move old files automatically to Amazon Glacier.",
            "B. Use the right combination of storage classes based on different use cases.",
            "C. Pick the right Availability Zone for your S3 bucket.",
            "D. Move all the data stored in S3 standard to EBS."
        ],
        "answer": 1
    },
    {
        "question": "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
        "options": [
            "A. AWS Direct Connect.",
            "B. Amazon EC2 Auto Scaling.",
            "C. Elastic Load Balancer.",
            "D. CloudFormation.",
            "E. Network ACLs."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "Which of the following activities may help reduce your AWS monthly costs?",
        "options": [
            "A. Enabling Amazon EC2 Auto Scaling for all of your workloads.",
            "B. Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
            "C. Removing all of your Cost Allocation Tags.",
            "D. Deploying your AWS resources across multiple Availability Zones."
        ],
        "answer": 0
    },
    {
        "question": "What is the AWS service/feature that takes advantage of Amazon CloudFront\u2019s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
        "options": [
            "A. S3 Transfer Acceleration.",
            "B. AWS WAF.",
            "C. AWS Snowmobile.",
            "D. AWS Snowball."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
        "options": [
            "A. AWS X-Ray.",
            "B. Network ACL.",
            "C. Security Groups.",
            "D. VPC Flow logs."
        ],
        "answer": 2
    },
    {
        "question": "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
        "options": [
            "A. AWS KMS.",
            "B. AWS Global accelerator.",
            "C. AWS Direct Connect.",
            "D. AWS Glue.",
            "E. Amazon CloudFront."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
        "options": [
            "A. Building the relational database schema.",
            "B. Performing backups.",
            "C. Managing the database settings.",
            "D. Patching the database software.",
            "E. Installing the database software."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
        "options": [
            "A. Amazon DynamoDB.",
            "B. Amazon SNS.",
            "C. Amazon RDS.",
            "D. Amazon ElastiCache."
        ],
        "answer": 2
    },
    {
        "question": "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
        "options": [
            "A. APN Consulting Partners.",
            "B. AWS TAM.",
            "C. APN Technology Partners.",
            "D. AWS Professional Services."
        ],
        "answer": 0
    },
    {
        "question": "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
        "options": [
            "A. Amazon LightSail.",
            "B. AWS Lambda.",
            "C. Amazon RDS instances.",
            "D. Amazon EC2 instances."
        ],
        "answer": 1
    },
    {
        "question": "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
        "options": [
            "A. She has properly built an elastic system.",
            "B. She has properly built a fault tolerant system.",
            "C. She has properly built an encrypted system.",
            "D. She has properly built a scalable system."
        ],
        "answer": 1
    }
];