const quizData = [
    {
        "question": "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
        "options": [
            "A. Amazon Route 53.",
            "B. AWS ACM.",
            "C. AWS Directory Service.",
            "D. AWS Identity & Access Management.",
            "E. AWS Data Pipeline."
        ],
        "answer": [
            0,
            1
        ]
    },
    {
        "question": "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
        "options": [
            "A. Amazon EC2.",
            "B. Amazon S3.",
            "C. AWS Lambda.",
            "D. Amazon EMR.",
            "E. Amazon EBS."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
        "options": [
            "A. Application management.",
            "B. Capacity management.",
            "C. Access control.",
            "D. Operating system maintenance.",
            "E. Data management."
        ],
        "answer": [
            1,
            3
        ]
    },
    {
        "question": "How do ELBs improve the reliability of your application?",
        "options": [
            "A. By distributing traffic across multiple S3 buckets.",
            "B. By replicating data to multiple availability zones.",
            "C. By creating database Read Replicas.",
            "D. By ensuring that only healthy targets receive traffic."
        ],
        "answer": 3
    },
    {
        "question": "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
        "options": [
            "A. On-demand instances.",
            "B. Spot instances.",
            "C. Dedicated instances.",
            "D. Reserved instances."
        ],
        "answer": 2
    },
    {
        "question": "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
        "options": [
            "A. Snowball.",
            "B. S3 Transfer Acceleration.",
            "C. Snowmobile.",
            "D. Amazon VPC."
        ],
        "answer": 2
    },
    {
        "question": "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
        "options": [
            "A. Amazon S3 Glacier.",
            "B. Amazon EFS.",
            "C. Amazon S3 Standard.",
            "D. Amazon EBS."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS Service is used to manage user permissions?",
        "options": [
            "A. Security Groups.",
            "B. Amazon ECS.",
            "C. AWS IAM.",
            "D. AWS Support."
        ],
        "answer": 2
    },
    {
        "question": "Which support plan includes AWS Support Concierge Service?",
        "options": [
            "A. Premium Support.",
            "B. Business Support.",
            "C. Enterprise Support.",
            "D. Standard Support."
        ],
        "answer": 2
    },
    {
        "question": "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
        "options": [
            "A. AWS Config.",
            "B. Amazon CloudWatch.",
            "C. AWS CloudTrail.",
            "D. AWS CloudFormation."
        ],
        "answer": 2
    },
    {
        "question": "What are the benefits of using an AWS-managed service? (Choose TWO)",
        "options": [
            "A. Provides complete control over the virtual infrastructure.",
            "B. Allows customers to deliver new solutions faster.",
            "C. Lowers operational complexity.",
            "D. Eliminates the need to encrypt data.",
            "E. Allows developers to control all patching related activities."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "Which of the following are use cases for Amazon S3? (Choose TWO)",
        "options": [
            "A. Hosting static websites.",
            "B. Hosting websites that require sustained high CPU utilization.",
            "C. Cost-effective database and log storage.",
            "D. A media store for the CloudFront service.",
            "E. Processing data streams at any scale."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "What is the AWS\u2019 recommendation regarding access keys?",
        "options": [
            "A. Delete all access keys and use passwords instead.",
            "B. Only share them with trusted people.",
            "C. Rotate them regularly.",
            "D. Save them within your application code."
        ],
        "answer": 2
    },
    {
        "question": "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
        "options": [
            "A. Key Pair.",
            "B. Access Keys.",
            "C. SDK.",
            "D. MFA."
        ],
        "answer": 3
    },
    {
        "question": "What is the benefit of using an API to access AWS Services?",
        "options": [
            "A. It improves the performance of AWS resources.",
            "B. It reduces the time needed to provision AWS resources.",
            "C. It reduces the number of developers necessary.",
            "D. It allows for programmatic management of AWS resources."
        ],
        "answer": 3
    },
    {
        "question": "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
        "options": [
            "A. AWS Storage Gateway.",
            "B. Amazon S3.",
            "C. Amazon EBS.",
            "D. Amazon Glacier."
        ],
        "answer": 2
    },
    {
        "question": "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
        "options": [
            "A. Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
            "B. Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
            "C. Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
            "D. Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill."
        ],
        "answer": 2
    },
    {
        "question": "What is the AWS service that provides five times the performance of a standard MySQL database?",
        "options": [
            "A. Amazon Aurora.",
            "B. Amazon Redshift.",
            "C. Amazon DynamoDB.",
            "D. Amazon Neptune."
        ],
        "answer": 0
    },
    {
        "question": "What does AWS Service Catalog provide?",
        "options": [
            "A. It enables customers to quickly find descriptions and use cases for AWS services.",
            "B. It enables customers to explore the different catalogs of AWS services.",
            "C. It simplifies organizing and governing commonly deployed IT services.",
            "D. It allows developers to deploy infrastructure on AWS using familiar programming languages."
        ],
        "answer": 2
    },
    {
        "question": "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
        "options": [
            "A. Protecting credentials.",
            "B. Logging access activity.",
            "C. Patching the database software.",
            "D. Operating system maintenance.",
            "E. Creating access policies."
        ],
        "answer": [
            2,
            3
        ]
    },
    {
        "question": "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
        "options": [
            "A. AWS Snowball Migration Service.",
            "B. AWS Application Discovery Service.",
            "C. AWS DMS.",
            "D. AWS Migration Hub."
        ],
        "answer": 1
    },
    {
        "question": "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
        "options": [
            "A. Amazon Machine Image.",
            "B. AWS Cost Explorer.",
            "C. AWS Cost & Usage Report.",
            "D. Amazon CloudWatch."
        ],
        "answer": 2
    },
    {
        "question": "Which statement best describes the concept of an AWS region?",
        "options": [
            "A. An AWS Region is a geographical location with a collection of Edge locations.",
            "B. An AWS Region is a virtual network dedicated only to a single AWS customer.",
            "C. An AWS Region is a geographical location with a collection of Availability Zones.",
            "D. An AWS Region represents the country where the AWS infrastructure exist."
        ],
        "answer": 2
    },
    {
        "question": "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
        "options": [
            "A. SNS logs.",
            "B. SQS logs.",
            "C. CloudWatch Logs.",
            "D. CloudTrail logs."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
        "options": [
            "A. Availability Zones.",
            "B. Data sovereignty.",
            "C. The number of reads and writes per second.",
            "D. The nature of the queries.",
            "E. Software bugs."
        ],
        "answer": [
            2,
            3
        ]
    },
    {
        "question": "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
        "options": [
            "A. Quickly identify resources that belong to a specific project.",
            "B. Quickly identify software solutions on AWS.",
            "C. Track API calls in your AWS account.",
            "D. Quickly identify deleted resources and their metadata.",
            "E. Track AWS spending across multiple resources."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "What are AWS shared controls?",
        "options": [
            "A. Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
            "B. Controls that a customer inherits from AWS.",
            "C. Controls that apply to both the infrastructure layer and customer layers.",
            "D. Controls that the customer and AWS collaborate together upon to secure the infrastructure."
        ],
        "answer": 3
    },
    {
        "question": "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
        "options": [
            "A. Build multi-region architectures to better serve global customers.",
            "B. Apply security at all layers.",
            "C. Implement strong Identity and Access controls.",
            "D. Use serverless architectures.",
            "E. Enable audit logging."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
        "options": [
            "A. Protecting sensitive data.",
            "B. Patching of the underlying infrastructure.",
            "C. Setup and operation of managed databases.",
            "D. Maintaining consistent hardware components.",
            "E. Installing and configuring third-party software."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
        "options": [
            "A. Free commercial software licenses.",
            "B. Free technical support.",
            "C. Elastic resources.",
            "D. On-site visits for auditing.",
            "E. Cost Savings."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
        "options": [
            "A. Amazon Inspector.",
            "B. AWS Virtual Private Gateway.",
            "C. AWS Batch.",
            "D. Amazon ECS.",
            "E. AWS Config."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
        "options": [
            "A. Amazon EC2 is considered a Serverless Web Service.",
            "B. Amazon EC2 eliminates the need to invest in hardware upfront.",
            "C. Amazon EC2 can launch as many or as few virtual servers as needed.",
            "D. Amazon EC2 offers scalable computing."
        ],
        "answer": 0
    },
    {
        "question": "What is the AWS Compute service that executes code only when triggered by events?",
        "options": [
            "A. AWS Lambda.",
            "B. Amazon CloudWatch.",
            "C. AWS Transit Gateway.",
            "D. Amazon EC2."
        ],
        "answer": 0
    },
    {
        "question": "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers\u2019 requirements. What is the name of these virtual servers in AWS?",
        "options": [
            "A. Amazon EBS Snapshots.",
            "B. Amazon VPC.",
            "C. AWS Managed Servers.",
            "D. Amazon EC2 Instances."
        ],
        "answer": 3
    },
    {
        "question": "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
        "options": [
            "A. AWS Secrets Manager.",
            "B. AWS WAF.",
            "C. AWS CAF.",
            "D. Amazon EFS."
        ],
        "answer": 2
    },
    {
        "question": "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
        "options": [
            "A. AWS Cost Explorer.",
            "B. AWS TCO Calculator.",
            "C. AWS Budgets.",
            "D. AWS Pricing Calculator."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
        "options": [
            "A. Using AWS Trusted Advisor to find underutilized resources.",
            "B. Using AWS CloudTrail to record user activities.",
            "C. Using AWS CloudFormation to manage infrastructure as code.",
            "D. Deploying an application in multiple Availability Zones."
        ],
        "answer": 2
    },
    {
        "question": "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
        "options": [
            "A. AWS allows them to pay later when their business succeed.",
            "B. AWS can build complete data centers faster than any other Cloud provider.",
            "C. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
            "D. AWS removes the need to invest in operational expenditure.",
            "E. Using AWS allows companies to replace large capital expenditure with low variable costs."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "What are the benefits of using DynamoDB? (Choose TWO)",
        "options": [
            "A. Automatically scales to meet required throughput capacity.",
            "B. Provides resizable instances to match the current demand.",
            "C. Supports both relational and non-relational data models.",
            "D. Offers extremely low (single-digit millisecond) latency.",
            "E. Supports the most popular NoSQL database engines such as CouchDB and MongoDB."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
        "options": [
            "A. Versioning.",
            "B. Deduplication.",
            "C. Permissions.",
            "D. Decryption.",
            "E. Conversion."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
        "options": [
            "A. AWS Partners.",
            "B. AWS Artifact.",
            "C. AWS Professional Services.",
            "D. Amazon Athena.",
            "E. Amazon PinPoint."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
        "options": [
            "A. Deleting unused EBS volumes after terminating an EC2instance.",
            "B. Deleting unused AutoScaling launch configuration.",
            "C. Deleting unused Elastic Load Balancers.",
            "D. Releasing unused Elastic IPs after terminating an EC2instance."
        ],
        "answer": 1
    },
    {
        "question": "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
        "options": [
            "A. AWS Cost Explorer.",
            "B. AWS Pricing Calculator.",
            "C. AWS Budgets.",
            "D. AWS Consolidated Billing."
        ],
        "answer": 0
    },
    {
        "question": "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
        "options": [
            "A. Running penetration tests.",
            "B. Reserving capacity.",
            "C. Data center operations.",
            "D. Auditing and regulatory compliance.",
            "E. Infrastructure security."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
        "options": [
            "A. Amazon Simple Email Service (Amazon SES).",
            "B. Amazon Simple Storage Service (Amazon S3).",
            "C. Amazon Simple Notification Service (Amazon SNS).",
            "D. Amazon Simple Queue Service (Amazon SQS)."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following allows you to create new RDS instances? (Choose TWO)",
        "options": [
            "A. AWS CodeDeploy.",
            "B. AWS Quick Starts.",
            "C. AWS CloudFormation.",
            "D. AWS DMS.",
            "E. AWS Management Console."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
        "options": [
            "A. Low monthly instance maintenance costs.",
            "B. Low-cost instance tagging.",
            "C. Per-second instance billing.",
            "D. Low instance start-up fees."
        ],
        "answer": 2
    },
    {
        "question": "Which AWS Group assists customers in achieving their desired business outcomes?",
        "options": [
            "A. AWS Security Team.",
            "B. AWS Professional Services.",
            "C. AWS Trusted Advisor.",
            "D. AWS Concierge Support Team."
        ],
        "answer": 1
    },
    {
        "question": "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
        "options": [
            "A. AWS KMS.",
            "B. AWS Service Control Policies (SCPs).",
            "C. Multi-Factor Authentication (MFA).",
            "D. Amazon Macie."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS Service allows customers to download AWS SOC & PCI reports?",
        "options": [
            "A. AWS Well-Architected Tool.",
            "B. AWS Artifact.",
            "C. AWS Glue.",
            "D. Amazon Chime."
        ],
        "answer": 1
    }
];