const quizData = [
    {
        "question": "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
        "options": [
            "A. By minimizing large capital expenditures.",
            "B. By having no responsibility for third-party license costs.",
            "C. By having no operational expenditures.",
            "D. By having AWS manage applications."
        ],
        "answer": 0
    },
    {
        "question": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
        "options": [
            "A. AWS Trusted Advisor.",
            "B. AWS Online Tech Talks.",
            "C. AWS Blog.",
            "D. AWS Forums.",
            "E. AWS Classroom Training."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "Which of the following will enhance the security of access to the AWS Management Console\u2019? (Select TWO)",
        "options": [
            "A. AWS Secrets Manager.",
            "B. AWS Certificate Manager.",
            "C. AWS Multi-Factor Authentication (AWS MFA).",
            "D. Security groups.",
            "E. Password policies."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
        "options": [
            "A. Amazon CloudFront distributions.",
            "B. Amazon Route 53.",
            "C. Security Groups.",
            "D. Subnets.",
            "E. Elastic Load Balancing."
        ],
        "answer": [
            2,
            3
        ]
    },
    {
        "question": "For which auditing process does AWS have sole responsibility?",
        "options": [
            "A. AWS IAM policies.",
            "B. Physical security.",
            "C. Amazon S3 bucket policies.",
            "D. AWS CloudTrail Logs."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
        "options": [
            "A. The ability to receive one bill for multiple accounts.",
            "B. Service limits increasing by default in all accounts.",
            "C. A fixed discount on the monthly bill.",
            "D. Potential volume discounts, as usage in all accounts is combined.",
            "E. The automatic extension of the master account\u2019s AWS support plan to all accounts."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
        "options": [
            "A. Patching databases software.",
            "B. Testing application releases.",
            "C. Backing up databases.",
            "D. Creating database schema.",
            "E. Running penetration tests."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
        "options": [
            "A. Contact an AWS Account Manager to sign a new contract.",
            "B. Move an Availability Zone to the new Region.",
            "C. Begin deploying resources in the second Region.",
            "D. Download the AWS Management Console for the new Region."
        ],
        "answer": 2
    },
    {
        "question": "Why is it beneficial to use Elastic Load Balancers with applications?",
        "options": [
            "A. They allow for the conversion from Application Load.",
            "B. Balancers to Classic Load Balancers.",
            "C. They are capable of handling constant changes in network traffic patterns.",
            "D. They automatically adjust capacity. They are provided at no charge to users."
        ],
        "answer": 2
    },
    {
        "question": "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
        "options": [
            "A. Enterprise.",
            "B. Business.",
            "C. Developer",
            "D. Basic"
        ],
        "answer": 1
    },
    {
        "question": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
        "options": [
            "A. Amazon S3.",
            "B. Amazon Glacier.",
            "C. Amazon EBS.",
            "D. Amazon EC2 Instance Store."
        ],
        "answer": 0
    },
    {
        "question": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
        "options": [
            "A. AWS Enterprise Support.",
            "B. AWS Solutions Architects.",
            "C. AWS Professional Services.",
            "D. AWS Account Managers."
        ],
        "answer": 2
    },
    {
        "question": "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?",
        "options": [
            "A. Basic.",
            "B. Developer.",
            "C. Business.",
            "D. Enterprise."
        ],
        "answer": 2
    },
    {
        "question": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
        "options": [
            "A. AWS Config.",
            "B. AWS Trusted Advisor.",
            "C. Amazon CloudWatch.",
            "D. Amazon Inspector."
        ],
        "answer": 0
    },
    {
        "question": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
        "options": [
            "A. It identifies software vulnerabilities in applications running on AWS.",
            "B. It provides a list of cost optimization recommendations based on current AWS usage.",
            "C. It detects potential security vulnerabilities caused by permissions settings on account resources.",
            "D. It automatically corrects potential security issues caused by permissions settings on account resources.",
            "E. It provides proactive alerting whenever an Amazon EC2 instance has been compromised."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "Which AWS managed service is used to host databases?",
        "options": [
            "A. AWS Batch.",
            "B. AWS Artifact.",
            "C. AWS Data Pipeline.",
            "D. Amazon RDS."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
        "options": [
            "A. IAM group.",
            "B. IAM user.",
            "C. IAM role.",
            "D. IAM policy."
        ],
        "answer": 1
    },
    {
        "question": "Under the shared responsibility model, which of the following is the customer responsible for?",
        "options": [
            "A. Ensuring that disk drives are wiped after use.",
            "B. Ensuring that firmware is updated on hardware devices.",
            "C. Ensuring that data is encrypted at rest.",
            "D. Ensuring that network cables are category six or higher."
        ],
        "answer": 2
    },
    {
        "question": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
        "options": [
            "A. Amazon S3.",
            "B. Amazon Glacier.",
            "C. Amazon EBS.",
            "D. Amazon EFS."
        ],
        "answer": 3
    },
    {
        "question": "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
        "options": [
            "A. An access key ID.",
            "B. A primary key.",
            "C. A secret access key.",
            "D. A user ID.",
            "E. A secondary key."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "Which of the following is a shared control between the customer and AWS?",
        "options": [
            "A. Providing a key for Amazon S3 client-side encryption.",
            "B. Configuration of an Amazon EC2 instance.",
            "C. Environmental controls of physical AWS data centers.",
            "D. Awareness."
        ],
        "answer": 3
    },
    {
        "question": "Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?",
        "options": [
            "A. Amazon EBS.",
            "B. Amazon EC2 instance store.",
            "C. Amazon EFS.",
            "D. Amazon S3."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is an advantage of consolidated billing on AWS?",
        "options": [
            "A. Volume pricing qualification.",
            "B. Shared access permissions.",
            "C. Multiple bills per account.",
            "D. Eliminates the need for tagging."
        ],
        "answer": 0
    },
    {
        "question": "Which services are parts of the AWS serverless platform?",
        "options": [
            "A. Amazon EC2, Amazon S3, Amazon Athena.",
            "B. Amazon Kinesis, Amazon SQS, Amazon EMR.",
            "C. AWS Step Functions, Amazon DynamoDB, Amazon SNS.",
            "D. Amazon Athena, Amazon Cognito, Amazon EC2."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
        "options": [
            "A. Spot Instances.",
            "B. Reserved Instances.",
            "C. Dedicated Hosts.",
            "D. On-Demand Instances."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following security measures protect access to an AWS account? (Select TWO)",
        "options": [
            "A. Enable AWS CloudTrail.",
            "B. Grant least privilege access to IAM users.",
            "C. Create one IAM user and share with many developers and users.",
            "D. Enable Amazon CloudFront.",
            "E. Activate multi-factor authentication (MFA) for privileged users."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "Which AWS service provides the ability to manage infrastructure as code?",
        "options": [
            "A. AWS CodePipeline.",
            "B. AWS CodeDeploy.",
            "C. AWS Direct Connect.",
            "D. AWS CloudFormation."
        ],
        "answer": 3
    },
    {
        "question": "What is an advantage of deploying an application across multiple Availability Zones?",
        "options": [
            "A. There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
            "B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
            "C. There will be better coverage as Availability Zones are geographical^ distant and can serve a wider area.",
            "D. There will be decreased application latency that will improve the user experience."
        ],
        "answer": 1
    },
    {
        "question": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
        "options": [
            "A. Amazon Aurora.",
            "B. Amazon Redshift.",
            "C. Amazon DynamoDB.",
            "D. Amazon ElastiCache."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is an AWS Cloud architecture design principle?",
        "options": [
            "A. Implement single points of failure.",
            "B. Implement loose coupling.",
            "C. Implement monolithic design.",
            "D. Implement vertical scaling."
        ],
        "answer": 1
    },
    {
        "question": "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
        "options": [
            "A. AWS Trusted Advisor.",
            "B. AWS Support case.",
            "C. Concierge team.",
            "D. Amazon Connect."
        ],
        "answer": 2
    },
    {
        "question": "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
        "options": [
            "A. Moving from variable operational expense ( opex ) to upfront capital expense (capex).",
            "B. Moving from upfront capital expense (capex) to variable capital expense (capex).",
            "C. Moving from upfront capital expense (capex) to variable operational expense ( opex ).",
            "D. Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex )."
        ],
        "answer": 2
    },
    {
        "question": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
        "options": [
            "A. Dedicated Hosts",
            "B. Reserved Instances",
            "C. On-Demand Instances",
            "D. No Upfront Reserved Instances"
        ],
        "answer": 0
    },
    {
        "question": "Which AWS service should be used for long-term, low-cost storage of data backups?",
        "options": [
            "A. Amazon RDS.",
            "B. Amazon Glacier.",
            "C. AWS Snowball.",
            "D. AWS EBS."
        ],
        "answer": 1
    },
    {
        "question": "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
        "options": [
            "A. Enterprise.",
            "B. Business.",
            "C. Developer.",
            "D. Basic."
        ],
        "answer": 1
    },
    {
        "question": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
        "options": [
            "A. Reserved Instances.",
            "B. On-Demand.",
            "C. Dedicated Hosts.",
            "D. Spot Instances."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
        "options": [
            "A. appGateway.",
            "B. Amazon S3.",
            "C. Amazon Elastic File System (EFS).",
            "D. Amazon Glacier.",
            "E. Amazom CloudFront."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "What can AWS edge locations be used for? (Select TWO)",
        "options": [
            "A. Hosting applications.",
            "B. Delivering content closer to users.",
            "C. Running NoSQL database caching services.",
            "D. Reducing traffic on the server by caching responses.",
            "E. Sending notification messages to end users."
        ],
        "answer": [
            1,
            3
        ]
    },
    {
        "question": "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
        "options": [
            "A. AWS Total Cost of Ownership (TCO) Calculator.",
            "B. Cost Explorer.",
            "C. AWS Budgets.",
            "D. AWS Migration Hub."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS service provides a customized view of the health of specific AWS services that power a customer\u2019s workloads running on AWS?",
        "options": [
            "A. AWS Service Health Dashboard.",
            "B. AWS X-Ray.",
            "C. AWS Personal Health Dashboard.",
            "D. Amazon CloudWatch."
        ],
        "answer": 2
    },
    {
        "question": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
        "options": [
            "A. It allows the business to eliminate IT bills.",
            "B. It allows the business to put a server in each customer\u2019s data center.",
            "C. It allows the business to focus on business activities.",
            "D. It allows the business to leave servers unpatched."
        ],
        "answer": 2
    },
    {
        "question": "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
        "options": [
            "A. AWS Senior Support Engineers.",
            "B. AWS Technical Account Managers.",
            "C. AWS Trusted Advisor.",
            "D. AWS Discussion Forums."
        ],
        "answer": 3
    },
    {
        "question": "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
        "options": [
            "A. Deploy applications across multiple Availability Zones within an AWS Region.",
            "B. Use a hybrid cloud computing deployment model within the geographic area.",
            "C. Deploy applications across multiple AWS Regions.",
            "D. Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions."
        ],
        "answer": 2
    },
    {
        "question": "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
        "options": [
            "A. Ensuring network connectivity from AWS to the internet.",
            "B. Patching and fixing flaws within the AWS Cloud infrastructure.",
            "C. Ensuring the physical security of cloud data centers.",
            "D. Ensuring Amazon EBS volumes are backed up."
        ],
        "answer": 3
    },
    {
        "question": "In which scenario should Amazon EC2 Spot Instances be used?",
        "options": [
            "A. A company wants to move its main website to AWS from an on-premises web server.",
            "B. A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
            "C. A company\u2019s heavily used legacy database is currently running on-premises.",
            "D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
        ],
        "answer": 3
    },
    {
        "question": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer\u2019s decision? (Select TWO)",
        "options": [
            "A. Reduced latency to users.",
            "B. The application\u2019s presentation in the local language.",
            "C. Data sovereignty compliance.",
            "D. Cooling costs in hotter climates.",
            "E. Proximity to the customer\u2019s office for on-site visits."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "Which AWS service provides alerts when an AWS event may impact a company\u2019s AWS resources?",
        "options": [
            "A. AWS Personal Health Dashboard.",
            "B. AWS Service Health Dashboard.",
            "C. AWS Trusted Advisor.",
            "D. AWS Infrastructure Event Management."
        ],
        "answer": 0
    },
    {
        "question": "Which disaster recovery scenario offers the lowest probability of down time?",
        "options": [
            "A. Backup and restore.",
            "B. Pilot light.",
            "C. Warm standby.",
            "D. Multi-site active-active."
        ],
        "answer": 3
    },
    {
        "question": "Which service\u2019s PRIMARY purpose is software version control?",
        "options": [
            "A. Amazon CodeStar.",
            "B. AWS Command Line Interface (AWS CLI).",
            "C. Amazon Cognito.",
            "D. AWS CodeCommit."
        ],
        "answer": 3
    },
    {
        "question": "How can a customer increase security to AWS account logons? (Select TWO)",
        "options": [
            "A. Configure AWS Certificate Manager",
            "B. Enable Multi-Factor Authentication (MFA)",
            "C. Use Amazon Cognito to manage access",
            "D. Configure a strong password policy",
            "E. Enable AWS Organizations"
        ],
        "answer": [
            1,
            3
        ]
    }
];