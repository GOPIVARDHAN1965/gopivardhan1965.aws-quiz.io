const quizData = [
    {
        "question": "Where can you store files in AWS? (Choose TWO)",
        "options": [
            "A. Amazon EFS.",
            "B. Amazon SNS.",
            "C. Amazon EBS.",
            "D. Amazon ECS.",
            "E. Amazon EMR."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
        "options": [
            "A. Amazon Simple Queue Service.",
            "B. AWS Storage Gateway.",
            "C. Amazon Simple Email Service.",
            "D. Amazon Simple Storage Service."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
        "options": [
            "A. Pay less as AWS grows.",
            "B. Pay as you go.",
            "C. Pay less by using more.",
            "D. Save when you reserve."
        ],
        "answer": 3
    },
    {
        "question": "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
        "options": [
            "A. Right-size before and after migration.",
            "B. Use a Multi-Region Active-Passive architecture.",
            "C. Combine On-demand Capacity Reservations with Saving Plans.",
            "D. Use a Multi-Region Active-Active architecture."
        ],
        "answer": 0
    },
    {
        "question": "What is the primary storage service used by Amazon RDS database instances?",
        "options": [
            "A. Amazon Glacier.",
            "B. Amazon EBS.",
            "C. Amazon EFS.",
            "D. Amazon S3."
        ],
        "answer": 1
    },
    {
        "question": "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
        "options": [
            "A. AWS CodePipeline.",
            "B. AWS X-Ray.",
            "C. Amazon Inspector.",
            "D. AWS CloudTrail."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
        "options": [
            "A. Amazon Redshift.",
            "B. AWS Snowball.",
            "C. Amazon Simple Storage Service.",
            "D. Amazon EBS.",
            "E. Amazon DynamoDB."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
        "options": [
            "A. AWS Regions.",
            "B. Multi-AZ Deployment.",
            "C. Automatic patching.",
            "D. Read Replicas.",
            "E. Edge Locations."
        ],
        "answer": [
            1,
            3
        ]
    },
    {
        "question": "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application\u2019s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
        "options": [
            "A. Replicate the current resources across multiple Availability Zones within the same region.",
            "B. Migrate the application to a hosting provider in Asia.",
            "C. Recreate the website content.",
            "D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
        ],
        "answer": 3
    },
    {
        "question": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
        "options": [
            "A. AWS Identity and Access Management.",
            "B. Amazon RDS.",
            "C. Network Access Control Lists.",
            "D. Amazon EMR."
        ],
        "answer": 0
    },
    {
        "question": "Using Amazon EC2 falls under which of the following cloud computing models?",
        "options": [
            "A. Iaas & SaaS.",
            "B. IaaS.",
            "C. SaaS.",
            "D. PaaS."
        ],
        "answer": 1
    },
    {
        "question": "Which of the below is a best-practice when building applications on AWS?",
        "options": [
            "A. Strengthen physical security by applying the principle of least privilege.",
            "B. Ensure that the application runs on hardware from trusted vendors.",
            "C. Use IAM policies to maintain performance.",
            "D. Decouple the components of the application so that they run independently."
        ],
        "answer": 3
    },
    {
        "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
        "options": [
            "A. Amazon EBS.",
            "B. Amazon SQS.",
            "C. Amazon Instance store.",
            "D. Amazon S3."
        ],
        "answer": 3
    },
    {
        "question": "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
        "options": [
            "A. Active archives.",
            "B. Dynamic websites\u2019 assets.",
            "C. Long-term analytic data.",
            "D. Active databases.",
            "E. Cached data."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "What does Amazon Elastic Beanstalk provide?",
        "options": [
            "A. A PaaS solution to automate application deployment.",
            "B. A compute engine for Amazon ECS.",
            "C. A scalable file storage solution for use with AWS and on-premises servers.",
            "D. A NoSQL database service."
        ],
        "answer": 0
    },
    {
        "question": "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
        "options": [
            "A. Amazon Kinesis.",
            "B. Security groups.",
            "C. Amazon Inspector.",
            "D. AWS Network Access Control Lists."
        ],
        "answer": 2
    },
    {
        "question": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
        "options": [
            "A. Patch management controls.",
            "B. Database controls.",
            "C. Awareness & Training.",
            "D. Environmental controls.",
            "E. Physical controls."
        ],
        "answer": [
            3,
            4
        ]
    },
    {
        "question": "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
        "options": [
            "A. Reserved instances     - No Upfront.",
            "B. Reserved instances     - Partial Upfront.",
            "C. On-Demand instances.",
            "D. Spot Instances."
        ],
        "answer": 1
    },
    {
        "question": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users\u2019 experience?",
        "options": [
            "A. Elasticity.",
            "B. Global reach.",
            "C. Data durability.",
            "D. High availability."
        ],
        "answer": 1
    },
    {
        "question": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
        "options": [
            "A. AWS Batch.",
            "B. AWS Outposts.",
            "C. Amazon Lightsail.",
            "D. Amazon EC2.",
            "E. AWS Lambda."
        ],
        "answer": [
            3,
            4
        ]
    },
    {
        "question": "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
        "options": [
            "A. Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
            "B. Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
            "C. Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
            "D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
        ],
        "answer": 3
    },
    {
        "question": "Which statement is correct with regards to AWS service limits? (Choose TWO)",
        "options": [
            "A. You can contact AWS support to increase the service limits.",
            "B. Each IAM user has the same service limit.",
            "C. There are no service limits on AWS.",
            "D. You can use the AWS Trusted Advisor to monitor your service limits.",
            "E. The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
        "options": [
            "A. AWS Console.",
            "B. AWS Service Catalog.",
            "C. AWS OpsWorks.",
            "D. AWS CLI."
        ],
        "answer": 3
    },
    {
        "question": "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
        "options": [
            "A. AWS Artifact.",
            "B. AWS Cloud9.",
            "C. AWS Direct Connect.",
            "D. AWS CloudTrail.",
            "E. AWS VPN."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
        "options": [
            "A. AWS EC2 Auto Recovery.",
            "B. AWS Auto Scaling.",
            "C. AWS Network Load Balancer.",
            "D. AWS Application Load Balancer."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
        "options": [
            "A. Amazon Neptune.",
            "B. Amazon Aurora.",
            "C. Amazon RDS for SQL Server.",
            "D. Amazon RDS for PostgreSQL."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
        "options": [
            "A. AWS CloudHSM.",
            "B. Security Groups.",
            "C. AWS Batch.",
            "D. AWS IAM.",
            "E. Network Access Control Lists (Network ACLs)."
        ],
        "answer": [
            1,
            4
        ]
    },
    {
        "question": "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
        "options": [
            "A. Amazon Redshift.",
            "B. Amazon Kinesis.",
            "C. Amazon DynamoDB.",
            "D.  Amazon RDS."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
        "options": [
            "A. Application development.",
            "B. Market research.",
            "C. Business analysis.",
            "D. Physical hardware."
        ],
        "answer": 3
    },
    {
        "question": "How are AWS customers billed for Linux-based Amazon EC2 usage?",
        "options": [
            "A. EC2 instances will be billed on one second increments, with a minimum of one minute.",
            "B. EC2 instances will be billed on one hour increments, with a minimum of one day.",
            "C. EC2 instances will be billed on one minute increments, with a minimum of one hour.",
            "D. EC2 instances will be billed on one day increments, with a minimum of one month."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
        "options": [
            "A. Instance type.",
            "B. The Availability Zone where the instance is provisioned.",
            "C. Load balancing.",
            "D. Number of buckets.",
            "E. Number of private IPs."
        ],
        "answer": [
            0,
            1
        ]
    },
    {
        "question": "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
        "options": [
            "A. By creating an AWS Config template from the old instance and launching a new instance from it.",
            "B. By creating an EBS Snapshot of the old instance.",
            "C. By installing Aurora on EC2 and launching a new instance from it.",
            "D. By creating an AMI from the old instance and launching a new instance from it."
        ],
        "answer": 3
    },
    {
        "question": "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
        "options": [
            "A. IAM Principals.",
            "B. AWS Service Control Policies (SCPs).",
            "C. IAM policies.",
            "D. AWS Fargate."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following statements describes the AWS Cloud\u2019s agility?",
        "options": [
            "A. AWS allows you to host your applications in multiple regions around the world.",
            "B. AWS provides customizable hardware at the lowest possible cost.",
            "C. AWS allows you to provision resources in minutes.",
            "D. AWS allows you to pay upfront to reduce costs."
        ],
        "answer": 2
    },
    {
        "question": "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
        "options": [
            "A. Lower administrative burden.",
            "B. Complete control over the underlying host.",
            "C. Resizable compute capacity.",
            "D. Scales automatically to larger or smaller instance types.",
            "E. Supports the document and key-value data structure."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
        "options": [
            "A. Internet Gateway.",
            "B. AWS IQ.",
            "C. AWS Direct Connect.",
            "D. AWS Site-to-Site VPN."
        ],
        "answer": 3
    },
    {
        "question": "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
        "options": [
            "A. Enterprise Support.",
            "B. Developer Support.",
            "C. Basic Support.",
            "D. Business Support."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following is used to control network traffic in AWS? (Choose TWO)",
        "options": [
            "A. Network Access Control Lists (NACLs).",
            "B. Key Pairs.",
            "C. Access Keys.",
            "D. IAM Policies.",
            "E. Security Groups."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
        "options": [
            "A. Reserved instances.",
            "B. Spot Instances.",
            "C. On-Demand instances.",
            "D. Dedicated instances."
        ],
        "answer": 1
    },
    {
        "question": "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
        "options": [
            "A. AWS Service Health Dashboard.",
            "B. AWS Management Console.",
            "C. Amazon CloudWatch.",
            "D. AWS Personal Health Dashboard."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS service or feature can be used to call AWS Services from different programming languages?",
        "options": [
            "A. AWS Software Development Kit.",
            "B. AWS Command Line Interface.",
            "C. AWS CodeDeploy.",
            "D. AWS Management Console."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS Service can be used to register a new domain name?",
        "options": [
            "A. Amazon Personalize.",
            "B. Amazon Route 53.",
            "C. AWS KMS.",
            "D. AWS Config."
        ],
        "answer": 1
    },
    {
        "question": "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
        "options": [
            "A. AWS CloudFormation.",
            "B. AWS Migration Hub.",
            "C. AWS IAM.",
            "D. AWS Elastic Beanstalk.",
            "E. Amazon Macie."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "Which AWS service provides cost-optimization recommendations?",
        "options": [
            "A. AWS Trusted Advisor.",
            "B. AWS Pricing Calculator.",
            "C. Amazon QuickSight.",
            "D. AWS X-Ray."
        ],
        "answer": 0
    },
    {
        "question": "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
        "options": [
            "A. VPC Peering.",
            "B. AWS Transit Gateway.",
            "C. Amazon Connect.",
            "D. Security Groups."
        ],
        "answer": 1
    },
    {
        "question": "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
        "options": [
            "A. Instances can be shut down by AWS at any time with no notification.",
            "B. Reserved instances require at least a one-year pricing commitment.",
            "C. There is no additional charge for using dedicated instances.",
            "D. Reserved instances provide a significant discount compared to on-demand instances.",
            "E.Reserved instances are best suited for periodic workloads."
        ],
        "answer": [
            1,
            3
        ]
    },
    {
        "question": "Why does every AWS Region contain multiple Availability Zones?",
        "options": [
            "A. Multiple Availability Zones allows you to build resilient and highly available architectures.",
            "B. Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
            "C. Multiple Availability Zones allows for data replication and global reach.",
            "D. Multiple Availability Zones within a region increases the storage capacity available in that region."
        ],
        "answer": 0
    },
    {
        "question": "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
        "options": [
            "A. On-Demand Instances.",
            "B. Spot Instances.",
            "C. Reserved Instances     - All Upfront.",
            "D. Reserved Instances     - No Upfront."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is a benefit of running an application in multiple Availability Zones?",
        "options": [
            "A. Allows you to exceed AWS service limits.",
            "B. Reduces application response time between servers and global users.",
            "C. Increases available compute capacity.",
            "D. Increases the availability of your application."
        ],
        "answer": 3
    },
    {
        "question": "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
        "options": [
            "A. AWS sells the old devices to other hosting providers.",
            "B. AWS destroys the old devices in accordance with industry-standard practices.",
            "C. AWS sends the old devices for remanufacturing.",
            "D. AWS stores the old devices in a secure place."
        ],
        "answer": 1
    }
];