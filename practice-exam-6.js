const quizData = [
    {
        "question": "Which of the following is true regarding the AWS availability zones and edge locations?",
        "options": [
            "A. Edge locations are located in separate Availability Zones worldwide to serve global customers.",
            "B. An availability zone exists within an edge location to distribute content globally with low latency.",
            "C. An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.",
            "D. An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide."
        ],
        "answer": 3
    },
    {
        "question": "Which features are included in the AWS Business Support Plan? (Choose TWO)",
        "options": [
            "A. 24x7 access to customer service.",
            "B. Access to Cloud Support Engineers via email only during business hours.",
            "C. Access to the Infrastructure Event Management (IEM) feature for additional fee.",
            "D. 24x7 access to the TAM feature.",
            "E. Partial access to the core Trusted Advisor checks."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
        "options": [
            "A. Amazon GuardDuty.",
            "B. Amazon Personalize.",
            "C. Amazon Cognito.",
            "D. AWS IAM."
        ],
        "answer": 2
    },
    {
        "question": "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
        "options": [
            "A. AWS CloudFormation.",
            "B. AWS Config.",
            "C. AWS CloudTrail.",
            "D. AWS Auto Scaling."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
        "options": [
            "A. Eliminates the need to monitor servers and applications.",
            "B. Manages all the compliance and auditing tasks.",
            "C. Provides custom hardware to meet any specification.",
            "D. Eliminates the need to guess on infrastructure capacity needs.",
            "E. Enables customers to trade their capital expenses for operational expenses."
        ],
        "answer": [
            3,
            4
        ]
    },
    {
        "question": "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
        "options": [
            "A. AWS Fargate.",
            "B. Amazon Elastic Compute Cloud.",
            "C. Amazon RDS.",
            "D. AWS Database Migration service (DMS).",
            "E. AWS Lambda."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "Which AWS Service can perform health checks on Amazon EC2 instances?",
        "options": [
            "A. AWS CloudFormation.",
            "B. Amazon Route 53.",
            "C. Amazon Chime.",
            "D. Amazon Aurora."
        ],
        "answer": 1
    },
    {
        "question": "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
        "options": [
            "A. Amazon Comprehend.",
            "B. AWS IAM.",
            "C. Amazon Polly.",
            "D. Amazon Rekognition."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following are examples of AWS-managed databases? (Choose TWO)",
        "options": [
            "A. Amazon Neptune.",
            "B. Amazon CloudSearch.",
            "C. Microsoft SQL Server on Amazon EC2.",
            "D. MySQL on Amazon EC2.",
            "E. Amazon RDS for MySQL."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "A company\u2019s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
        "options": [
            "A. EC2 On-Demand Instances.",
            "B. EC2 Reserved Instances     - No Upfront.",
            "C. EC2 Spot Instances.",
            "D. EC2 Reserved Instances     - All Upfront."
        ],
        "answer": 2
    },
    {
        "question": "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
        "options": [
            "A. AWS account owner.",
            "B. AWS technical account manager.",
            "C. AWS security team.",
            "D. AWS cloud support engineers."
        ],
        "answer": 0
    },
    {
        "question": "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
        "options": [
            "A. AWS File Transfer Acceleration.",
            "B. AWS Server Migration Service.",
            "C. AWS Database Migration Service.",
            "D. AWS Application Discovery Service."
        ],
        "answer": 1
    },
    {
        "question": "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
        "options": [
            "A. It helps AWS customers deploy their applications without worrying about the underlying infrastructure.",
            "B. It applies advanced IAM security features automatically.",
            "C. It automates the provisioning and updating of your infrastructure in a safe and controlled manner.",
            "D. It allows you to model your entire infrastructure in just a text file.",
            "E. It compiles and builds application code in a timely manner."
        ],
        "answer": [
            2,
            3
        ]
    },
    {
        "question": "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
        "options": [
            "A. On-premises.",
            "B. Mixed.",
            "C. Hybrid.",
            "D. Cloud."
        ],
        "answer": 2
    },
    {
        "question": "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
        "options": [
            "A. CloudEndure Disaster Recovery.",
            "B. CloudEndure Migration.",
            "C. AWS Backup.",
            "D. AWS Glue."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
        "options": [
            "A. S3 Standard-IA.",
            "B. S3 Intelligent-Tiering.",
            "C. S3 Glacier Deep Archive.",
            "D. S3 Standard."
        ],
        "answer": 3
    },
    {
        "question": "You want to create a backup of your data in another geographical location. Where should you create this backup?",
        "options": [
            "A. In another Edge location.",
            "B. In another Region.",
            "C. In another VPC.",
            "D. In another Availability Zone."
        ],
        "answer": 1
    },
    {
        "question": "Which statement is true in relation to the security of Amazon EC2?",
        "options": [
            "A. You should use instance store volumes to store login data.",
            "B. You should regularly patch the operating system and applications on your EC2 instances.",
            "C. You should deploy critical components of your application in the Availability Zone that you trust.",
            "D. You can track all API calls using Amazon Athena."
        ],
        "answer": 1
    },
    {
        "question": "What does AWS Cost Explorer provide to help manage your AWS spend?",
        "options": [
            "A. Cost comparisons between AWS Cloud environments and on-premises environments.",
            "B. Accurate estimates of AWS service costs based on your expected usage.",
            "C. Consolidated billing.",
            "D. Highly accurate cost forecasts for up to 12 months ahead."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
        "options": [
            "A. RDS Single-AZ.",
            "B. RDS Write Replica.",
            "C. RDS Snapshots.",
            "D. RDS Multi-AZ."
        ],
        "answer": 3
    },
    {
        "question": "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
        "options": [
            "A. Deleting all EBS volumes attached to the instances.",
            "B. You cannot minimize charges for on-demand instances.",
            "C. Terminating the instances.",
            "D. Stopping the instances."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following strategies helps protect your AWS root account?",
        "options": [
            "A. Delete root user access keys if you do not need them.",
            "B. Apply MFA for the root account and use it for all of your work.",
            "C. Access the root account only from your personal Mobile Phone.",
            "D. Only share your AWS account password or access keys with trusted persons."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
        "options": [
            "A. The size of volumes provisioned per month.",
            "B. The compute capacity you consume.",
            "C. The amount of data you have stored in snapshots.",
            "D. The compute time you consume.",
            "E. The number of Snowball storage devices you request."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
        "options": [
            "A. Attach a separate IAM policy for each individual account.",
            "B. Apply the Principle of Least Privilege.",
            "C. For security purposes, you should not grant any permission to the DevOps team.",
            "D. Create six different IAM passwords."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following has the greatest impact on cost? (Choose TWO)",
        "options": [
            "A. Compute charges.",
            "B. The number of services used.",
            "C. Data Transfer In charges.",
            "D. Data Transfer Out charges.",
            "E. The number of IAM roles provisioned."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "Who from the following will get the largest discount?",
        "options": [
            "A. A user who chooses to buy On-demand, Convertible, Partial upfront instances.",
            "B. A user who chooses to buy Reserved, Convertible, All upfront instances.",
            "C. A user who chooses to buy Reserved, Standard, No upfront instances.",
            "D. A user who chooses to buy Reserved, Standard, All upfront instances."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following is an available option when purchasing Amazon EC2 instances?",
        "options": [
            "A. The ability to bid to get the lowest possible prices.",
            "B. The ability to register EC2 instances to get volume discounts on every hour the instances are running.",
            "C. The ability to buy Dedicated Instances for up to 90% discount.",
            "D. The ability to pay upfront to get lower hourly costs."
        ],
        "answer": 3
    },
    {
        "question": "What does the term \u201cEconomies of scale\u201d mean?",
        "options": [
            "A. It means that you save more when you consume more.",
            "B. It means as more time passes using AWS, you pay more for its services.",
            "C. It means that AWS will continuously lower costs as it grows.",
            "D. It means that you have the ability to pay as you go."
        ],
        "answer": 2
    },
    {
        "question": "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
        "options": [
            "A. AWS Auto Scaling.",
            "B. Amazon Elastic Compute Cloud.",
            "C. Amazon Elastic File System.",
            "D. Amazon ElastiCache."
        ],
        "answer": 0
    },
    {
        "question": "Which of the below options is true of Amazon VPC?",
        "options": [
            "A. Amazon VPC allows customers to control user interactions with all other AWS resources.",
            "B. AWS Customers have complete control over their Amazon VPC virtual networking environment.",
            "C. AWS is responsible for all the management and configuration details of Amazon VPC.",
            "D. Amazon VPC helps customers to review their AWS architecture and adopt best practices."
        ],
        "answer": 1
    },
    {
        "question": "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
        "options": [
            "A. AWS Cost Explorer.",
            "B. AWS Pricing Calculator.",
            "C. AWS Budgets.",
            "D. AWS TCO Calculator."
        ],
        "answer": 3
    },
    {
        "question": "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
        "options": [
            "A. AWS Config.",
            "B. Amazon Redshift.",
            "C. Amazon MQ.",
            "D. AWS Trusted Advisor.",
            "E. Amazon Cognito."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
        "options": [
            "A. AWS OpsWorks.",
            "B. AWS CloudFormation.",
            "C. AWS Quick Starts.",
            "D. AWS CloudTrail."
        ],
        "answer": 0
    },
    {
        "question": "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
        "options": [
            "A. Amazon Kinesis.",
            "B. Amazon QuickSight.",
            "C. AWS CodeDeploy.",
            "D. Amazon Athena."
        ],
        "answer": 2
    },
    {
        "question": "Select the services that are server-based: (Choose TWO)",
        "options": [
            "A. Amazon RDS.",
            "B. Amazon DynamoDB.",
            "C. AWS Lambda.",
            "D. AWS Fargate.",
            "E. Amazon EMR."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "What best describes penetration testing?",
        "options": [
            "A. Testing your application\u2019s response time from different locations.",
            "B. Testing your network to find security vulnerabilities that an attacker could exploit.",
            "C. Testing your instances to check for the unhealthy ones.",
            "D. Testing your software for bugs and errors."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following are use cases for Amazon EMR? (Choose TWO)",
        "options": [
            "A. Enables you to backup extremely large amounts of data at very low costs.",
            "B. Enables you to move Exabyte-scale data from on-premises datacenters into AWS.",
            "C. Enables you to analyze and process extremely large amounts of data in a timely manner.",
            "D. Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.",
            "E. Enables you to easily run and manage Docker containers."
        ],
        "answer": [
            2,
            3
        ]
    },
    {
        "question": "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?",
        "options": [
            "A. There is no chat feature in AWS support.",
            "B. The chat feature is available for all plans for an additional fee, but you have to request it first.",
            "C. At a minimum, upgrade to Business support plan.",
            "D. Upgrade from the Basic Support plan to Developer Support."
        ],
        "answer": 2
    },
    {
        "question": "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn\u2019t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
        "options": [
            "A. AWS Fargate.",
            "B. AWS Batch.",
            "C. Amazon Personalize.",
            "D. AWS Elastic Beanstalk."
        ],
        "answer": 3
    },
    {
        "question": "Which statement best describes the AWS Pay-As-You-Go pricing model?",
        "options": [
            "A. With AWS, you replace low upfront expenses with large variable payments.",
            "B. With AWS, you replace low upfront expenses with large fixed payments.",
            "C. With AWS, you replace large upfront expenses with low fixed payments.",
            "D. With AWS, you replace large capital expenses with low variable payments."
        ],
        "answer": 3
    },
    {
        "question": "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
        "options": [
            "A. Database setup.",
            "B. Network traffic protection.",
            "C. Management of the operating system.",
            "D. Access management.",
            "E. Management of firewall rules."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "Which of the following strategies help analyze costs in AWS?",
        "options": [
            "A. Using tags to group resources.",
            "B. Using AWS CloudFormation to automate the deployment of resources.",
            "C. Deploying resources of the same type in different regions.",
            "D. Configuring Amazon Inspector to automatically analyze costs and email reports."
        ],
        "answer": 0
    },
    {
        "question": "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
        "options": [
            "A. AWS Direct Connect.",
            "B. Amazon Comprehend.",
            "C. AWS Snowmobile.",
            "D. AWS VPN."
        ],
        "answer": 0
    },
    {
        "question": "What is the main benefit of the AWS Storage Gateway service?",
        "options": [
            "A. It automates the process of building, maintaining, and running ETL jobs.",
            "B. It provides physical devices to migrate data from on premises to AWS.",
            "C. It allows integration of on-premises IT environments with Cloud Storage.",
            "D. It provides hardware-based key storage for regulatory compliance."
        ],
        "answer": 2
    },
    {
        "question": "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
        "options": [
            "A. Amazon S3 Glacier Deep Archive.",
            "B. Amazon S3 Standard-Infrequent Access.",
            "C. Amazon S3 Glacier.",
            "D. Instance Store."
        ],
        "answer": 1
    },
    {
        "question": "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
        "options": [
            "A. AWS Global Accelerator.",
            "B. AWS Data Pipeline.",
            "C. AWS DAX Accelerator.",
            "D. AWS Transfer Acceleration."
        ],
        "answer": 0
    },
    {
        "question": "Why are Serverless Architectures more economical than Server-based Architectures?",
        "options": [
            "A. Serverless Architectures use new powerful computing devices.",
            "B. With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.",
            "C. When you reserve serverless capacity, you will get large discounts compared to server reservation.",
            "D. With Serverless Architectures you have the ability to scale automatically up or down as demand changes."
        ],
        "answer": 1
    },
    {
        "question": "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
        "options": [
            "A. Point-to-point connectivity between an on-premises data center and AWS.",
            "B. Detects configuration changes in the AWS environment.",
            "C. DNS configuration and management.",
            "D. Manages global application traffic through a variety of routing types.",
            "E. Provides infrastructure security optimization recommendations."
        ],
        "answer": [
            2,
            3
        ]
    },
    {
        "question": "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
        "options": [
            "A. AWS Snowmobile.",
            "B. AWS Import/Export.",
            "C. AWS DMS.",
            "D. AWS Snowball."
        ],
        "answer": 3
    },
    {
        "question": "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
        "options": [
            "A. Amazon Redshift.",
            "B. Amazon Athena.",
            "C. AWS Cloud9.",
            "D. Amazon ElastiCache for Redis."
        ],
        "answer": 3
    }
];