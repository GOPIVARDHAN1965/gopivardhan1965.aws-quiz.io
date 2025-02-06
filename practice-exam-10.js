const quizData = [
    {
        "question": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
        "options": [
            "A. AWS Concierge.",
            "B. AWS CloudFormation.",
            "C. Amazon Simple Storage Service (Amazon S3).",
            "D. Amazon EC2 Auto Scaling.",
            "E. AWS Management Console."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
        "options": [
            "A. One-year, No Upfront, Standard RI pricing.",
            "B. One-year, All Upfront, Convertible RI pricing.",
            "C. Three-year, All Upfront, Standard RI pricing.",
            "D. Three-year, No Upfront, Convertible RI pricing."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
        "options": [
            "A. Summaries by Amazon Simple Notification Service (Amazon SNS).",
            "B. Free Amazon Elasticsearch Service analytics.",
            "C. Provided at no charge.",
            "D. Real-time monitoring.",
            "E. Adjustable retention."
        ],
        "answer": [
            3,
            4
        ]
    },
    {
        "question": "Which of the following is an AWS-managed compute service?",
        "options": [
            "A. Amazon SWF.",
            "B. Amazon EC2.",
            "C. AWS Lambda.",
            "D. Amazon Aurora."
        ],
        "answer": 2
    },
    {
        "question": "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
        "options": [
            "A. Amazon Elastic Compute Cloud (Amazon EC2).",
            "B. AWS Lambda.",
            "C. Amazon DynamoDB.",
            "D. AWS CodeCommit."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is the customer\u2019s responsibility under the AWS shared responsibility model?",
        "options": [
            "A. Patching underlying infrastructure",
            "B. Physical security",
            "C. Patching Amazon EC2 instances",
            "D. Patching network infrastructure"
        ],
        "answer": 2
    },
    {
        "question": "According to the AWS shared responsibility model who is responsible for configuration management?",
        "options": [
            "A. It is solely the responsibility of the customer.",
            "B. It is solely the responsibility of AWS.",
            "C. It is shared between AWS and the customer.",
            "D. It is not part of the AWS shared responsibility model."
        ],
        "answer": 2
    },
    {
        "question": "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
        "options": [
            "A. Amazon GuardDuty.",
            "B. Amazon Macie.",
            "C. Amazon Inspector.",
            "D. AWS Shield."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following BEST describe the AWS pricing model? (Select TWO)",
        "options": [
            "A. Fixed-term.",
            "B. Pay-as-you-go.",
            "C. Colocation.",
            "D. Planned.",
            "E. Variable cost."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
        "options": [
            "A. Ensuring that application data is encrypted at rest.",
            "B. Ensuring that AWS NTP servers are set to the correct time.",
            "C. Ensuring that users have received security training in the use of AWS services.",
            "D. Ensuring that access to data centers is restricted.",
            "E. Ensuring that hardware is disposed of properly."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
        "options": [
            "A. Create one global AWS account and move all AWS resources to that account.",
            "B. Sign up for three years of Reserved Instance pricing up front.",
            "C. Use the consolidated billing feature from AWS Organizations.",
            "D. Sign up for the AWS Enterprise support plan to get volume discounts."
        ],
        "answer": 2
    },
    {
        "question": "Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?",
        "options": [
            "A. A Partial Upfront Reserved Instances for a 1-year term.",
            "B. All Upfront Reserved instances for a 1 year form.",
            "C. All Upfront Reserved Instances for a 3 year term.",
            "D. No Upfront Reserved Instances for a 3 year term."
        ],
        "answer": 2
    },
    {
        "question": "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
        "options": [
            "A. Amazon Glacier.",
            "B. Amazon RDS.",
            "C. AWS Snowball.",
            "D. Amazon Redshift.",
            "E. Amazon EFS."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "Which AWS service allows users to identify the changes made to a resource over time?",
        "options": [
            "A. Amazon Inspector.",
            "B. AWS Config.",
            "C. AWS Service Catalog.",
            "D. AWS IAM."
        ],
        "answer": 1
    },
    {
        "question": "According to best practices, how should an application be designed to run in the AWS Cloud?",
        "options": [
            "A. Use tightly coupled components.",
            "B. Use loosely coupled components.",
            "C. Use infrequently coupled components.",
            "D. Use frequently coupled components."
        ],
        "answer": 1
    },
    {
        "question": "Which benefits are included with the AWS Business Support plan? (Select TWO)",
        "options": [
            "A. 24/7 assistance by way of live chat or a telephone call.",
            "B. Support from a dedicated AWS Technical Account Manager.",
            "C. An unlimited number of cases and contacts.",
            "D. 15-minute response time for production system interruption cases.",
            "E. Annual operational reviews with AWS Solutions Architects."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
        "options": [
            "A. Amazon Route 53.",
            "B. Amazon Neptune.",
            "C. Amazon SageMaker.",
            "D. Amazon Lightsail."
        ],
        "answer": 0
    },
    {
        "question": "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
        "options": [
            "A. Dedicated Hosts.",
            "B. Dedicated Instances.",
            "C. Spot Instances.",
            "D. Reserved Instances."
        ],
        "answer": 0
    },
    {
        "question": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
        "options": [
            "A. Dedicated RIs.",
            "B. Scheduled RIs.",
            "C. Convertible RIs.",
            "D. Standard RIs."
        ],
        "answer": 2
    },
    {
        "question": "Which service is best for storing common database query results, which helps to alleviate database access load?",
        "options": [
            "A. Amazon Machine Learning.",
            "B. Amazon SQS.",
            "C. Amazon ElastiCache.",
            "D. Amazon EC2 Instance Store."
        ],
        "answer": 2
    },
    {
        "question": "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
        "options": [
            "A. For non-production applications.",
            "B. For stateful workloads.",
            "C. For applications that cannot have interruptions.",
            "D. For fault-tolerant flexible applications.",
            "E. For sensitive database applications."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "Which AWS tools assist with estimating costs? (Select three)",
        "options": [
            "A. Detailed billing report.",
            "B. Cost allocation tags.",
            "C. AWS Simple Monthly Calculator.",
            "D. AWS Total Cost of Ownership (TCO) Calculator.",
            "E. Cost Estimator."
        ],
        "answer": [
            1,
            2,
            3
        ]
    },
    {
        "question": "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
        "options": [
            "A. Elastic Load Balancer.",
            "B. Amazon EC2 Auto Scaling.",
            "C. Amazon Route 53.",
            "D. Amazon CloudFront."
        ],
        "answer": 1
    },
    {
        "question": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
        "options": [
            "A. Enterprise.",
            "B. Business.",
            "C. Developer.",
            "D. Basic."
        ],
        "answer": 0
    },
    {
        "question": "Access keys in AWS Identity and Access Management (IM1) are used to:",
        "options": [
            "A. Log in to the AWS Management Console.",
            "B. Make programmatic calls to AWS from AWS APIs.",
            "C. Log in to Amazon EC2 instances.",
            "D. Authenticate to AWS CodeCommit repositories."
        ],
        "answer": 1
    },
    {
        "question": "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
        "options": [
            "A. AWS Glue.",
            "B. AWS Data Pipeline.",
            "C. Amazon CloudSearch.",
            "D. Amazon Athena."
        ],
        "answer": 3
    },
    {
        "question": "How does AWS shorten the time to provision IT resources?",
        "options": [
            "A. It supplies an online IT ticketing platform for resource requests.",
            "B. It supports automatic code validation services.",
            "C. It provides the ability to programmatically provision existing resources.",
            "D. It automates the resource request process from a company\u2019s IT vendor list."
        ],
        "answer": 2
    },
    {
        "question": "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
        "options": [
            "A. Amazon CloudFront.",
            "B. AWS Cloud9.",
            "C. AWS CloudTrail.",
            "D. AWS CloudHSM.",
            "E. Amazon CloudWatch."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "Which of the following are characteristics of Amazon S3? (Select TWO)",
        "options": [
            "A. A global file system.",
            "B. An object store.",
            "C. A local file store.",
            "D. A network file system.",
            "E. A durable storage system."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
        "options": [
            "A. AWS Budgets.",
            "B. Cost Explorer.",
            "C. AWS Total Cost of Ownership (TCO) Calculator.",
            "D. AWS Well-Architected Tool."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following services is in the category of AWS serverless platform?",
        "options": [
            "A. Amazon EMR.",
            "B. Elastic Load Balancing.",
            "C. AWS Lambda.",
            "D. AWS Mobile Hub."
        ],
        "answer": 2
    },
    {
        "question": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
        "options": [
            "A. Cost allocation tags.",
            "B. Consolidated billing.",
            "C. AWS Budgets.",
            "D. AWS Marketplace."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
        "options": [
            "A. AWS Cost Explorer.",
            "B. AWS Trusted Advisor.",
            "C. Consolidated billing.",
            "D. Detailed billing."
        ],
        "answer": 1
    },
    {
        "question": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
        "options": [
            "A. Cloud-native.",
            "B. Partner network.",
            "C. Hybrid architecture.",
            "D. Infrastructure as a service."
        ],
        "answer": 2
    },
    {
        "question": "What technology enables compute capacity to adjust as loads change?",
        "options": [
            "A. Load balancing.",
            "B. Automatic failover.",
            "C. Round robin.",
            "D. Auto Scaling."
        ],
        "answer": 3
    },
    {
        "question": "Which AWS service is a managed NoSQL database?",
        "options": [
            "A. Amazon Redshift.",
            "B. Amazon DynamoDB.",
            "C. Amazon Aurora.",
            "D. Amazon RDS for ManaDB."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
        "options": [
            "A. Data centers contain regions.",
            "B. Regions contain Availability Zones.",
            "C. Availability Zones contain edge locations.",
            "D. Edge locations contain regions."
        ],
        "answer": 1
    },
    {
        "question": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
        "options": [
            "A. Using many instances in parallel.",
            "B. Using a single large instance during off-peak hours.",
            "C. Using dedicated hardware.",
            "D. Using a large GPU instance type."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
        "options": [
            "A. Amazon EC2.",
            "B. Amazon Relational Database Service (Amazon RDS).",
            "C. Amazon Aurora.",
            "D. Amazon Redshift.",
            "E. Amazon S3."
        ],
        "answer": [
            0,
            1
        ]
    },
    {
        "question": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
        "options": [
            "A. API keys.",
            "B. Access keys.",
            "C. User names/Passwords.",
            "D. SSH keys."
        ],
        "answer": 1
    },
    {
        "question": "The user is fully responsible for which action when running workloads on AWS?",
        "options": [
            "A. Patching the infrastructure components.",
            "B. Maintaining the underlying infrastructure components.",
            "C. Maintaining physical and environmental controls.",
            "D. Implementing controls to route application traffic."
        ],
        "answer": 3
    },
    {
        "question": "Which AWS support plan includes a dedicated Technical Account Manager?",
        "options": [
            "A. Developer.",
            "B. Enterprise.",
            "C. Business.",
            "D. Basic."
        ],
        "answer": 1
    },
    {
        "question": "What time-savings advantage is offered with the use of Amazon Rekognition?",
        "options": [
            "A. Amazon Rekognition provides automatic watermarking of images.",
            "B. Amazon Rekognition provides automatic detection of objects appearing in pictures.",
            "C. Amazon Recognition provides the ability to resize millions of images automatically.",
            "D. Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
        ],
        "answer": 1
    },
    {
        "question": "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
        "options": [
            "A. Amazon AutoScaling.",
            "B. Amazon Redshift.",
            "C. AWS CloudTrail.",
            "D. AWS Lambda."
        ],
        "answer": 0
    },
    {
        "question": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
        "options": [
            "A. AWS manages the data stored in Amazon RDS tables.",
            "B. AWS manages the maintenance of the operating system.",
            "C. AWS automatically scales up instance types on demand.",
            "D. AWS manages the database type."
        ],
        "answer": 1
    },
    {
        "question": "A company\u2019s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
        "options": [
            "A. Implementing elasticity enabling the application to scale up or scale down as demand changes.",
            "B. Enabling several EC2 instances to run in parallel to achieve better performance.",
            "C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components.",
            "D. Doubling EC2 computing resources to increase system fault tolerance."
        ],
        "answer": 2
    },
    {
        "question": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
        "options": [
            "A. AWS Partner Network Technology Partners.",
            "B. AWS Marketplace.",
            "C. AWS Partner Network Consulting Partners.",
            "D. AWS Service Catalog."
        ],
        "answer": 2
    },
    {
        "question": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
        "options": [
            "A. Amazon Glacier.",
            "B. AWS Storage Gateway.",
            "C. Amazon S3.",
            "D. Amazon EBS."
        ],
        "answer": 2
    },
    {
        "question": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
        "options": [
            "A. Implement automation.",
            "B. Design for agility.",
            "C. Design for failure.",
            "D. Implement elasticity."
        ],
        "answer": 2
    },
    {
        "question": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
        "options": [
            "A. AWS IAM.",
            "B. AWS Organizations.",
            "C. AWS Schema Conversion Tool.",
            "D. AWS Config."
        ],
        "answer": 1
    }
];