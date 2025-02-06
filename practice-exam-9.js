const quizData = [
    {
        "question": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
        "options": [
            "A. AWS Well-Architected Framework documentation.",
            "B. Amazon CloudFront.",
            "C. AWS CodeCommit.",
            "D. AWS Quick Start reference deployments."
        ],
        "answer": 3
    },
    {
        "question": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
        "options": [
            "A. It simplifies relational database administration tasks.",
            "B. It provides 99.99999999999% reliability and durability.",
            "C. It automatically scales databases for loads.",
            "D. It enables users to dynamically adjust CPU and RAM resources."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
        "options": [
            "A. Amazon EC2.",
            "B. Amazon Route 53.",
            "C. Amazon ElastiCache.",
            "D. Amazon DynamoDB."
        ],
        "answer": 0
    },
    {
        "question": "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
        "options": [
            "A. Launch the instances across multiple Availability Zones in a single AWS Region.",
            "B. Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
            "C. Launch the instances in multiple AWS Regions but in the same Availability Zone.",
            "D. Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        "options": [
            "A. A public and private key-pair.",
            "B. Amazon Inspector.",
            "C. AWS Identity and Access Management (IAM) policies.",
            "D. Security Groups."
        ],
        "answer": 2
    },
    {
        "question": "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
        "options": [
            "A. AWS VPN.",
            "B. Amazon Redshift.",
            "C. API Gateway.",
            "D. Amazon Direct Connect."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "Which AWS service or feature can be used to monitor CPU usage?",
        "options": [
            "A. AWS CloudTrail.",
            "B. VPC Flow Logs.",
            "C. Amazon CloudWatch.",
            "D. AWS Config."
        ],
        "answer": 2
    },
    {
        "question": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
        "options": [
            "A. Granting access to individuals and services.",
            "B. Encrypting data in transit.",
            "C. Updating Amazon EC2 host firmware.",
            "D. Updating operating systems."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following security-related actions are available at no cost?",
        "options": [
            "A. Calling AWS Support.",
            "B. Contacting AWS Professional Services to request a workshop.",
            "C. Accessing forums, blogs, and whitepapers.",
            "D. Attending AWS classes at a local university."
        ],
        "answer": 2
    },
    {
        "question": "Which storage service can be used as a low-cost option for hosting static websites?",
        "options": [
            "A. Amazon Glacier.",
            "B. Amazon DynamoDB.",
            "C. Amazon Elastic File System (Amazon EFS).",
            "D. Amazon Simple Storage Service (Amazon S3)."
        ],
        "answer": 3
    },
    {
        "question": "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
        "options": [
            "A. Application security.",
            "B. Edge location management.",
            "C. Patch management.",
            "D. Client-side data."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
        "options": [
            "A. Multiple Availability Zones.",
            "B. Performance efficiency.",
            "C. Security.",
            "D. Encryption usage.",
            "E. High availability."
        ],
        "answer": [
            1,
            2
        ]
    },
    {
        "question": "Which AWS service identifies security groups that allow unrestricted access to a user\u2019s AWS resources?",
        "options": [
            "A. AWS Trusted Advisor.",
            "B. Amazon Inspector.",
            "C. Amazon CloudWatch.",
            "D. AWS CloudTrail."
        ],
        "answer": 0
    },
    {
        "question": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
        "options": [
            "A. Use manual monitoring.",
            "B. Use fixed servers.",
            "C. Implement loose coupling.",
            "D. Rely on individual components.",
            "E. Design for scalability."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "When architecting cloud applications, which of the following are a key design principle?",
        "options": [
            "A. Use the largest instance possible.",
            "B. Provision capacity for peak load.",
            "C. Use the Scrum development process.",
            "D. Implement elasticity."
        ],
        "answer": 3
    },
    {
        "question": "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
        "options": [
            "A. Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
            "B. Enable automate patching for the instances using the Amazon RDS console.",
            "C. In AWS Config. configure a rule for the instances and the required patch level.",
            "D. Use AWS Systems Manager to automate database patching according to a schedule."
        ],
        "answer": 3
    },
    {
        "question": "Which mechanism allows developers to access AWS services from application code?",
        "options": [
            "A. AWS Software Development Kit.",
            "B. AWS Management Console.",
            "C. AWS CodePipeline.",
            "D. AWS Config."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS feature will reduce the customer\u2019s total cost of ownership (TCO)?",
        "options": [
            "A. Shared responsibility security model.",
            "B. Single tenancy.",
            "C. Elastic computing.",
            "D. Encryption."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following is a benefit of using the AWS Cloud?",
        "options": [
            "A. Permissive security removes the administrative burden.",
            "B. Ability to focus on revenue-generating activities.",
            "C. Control over cloud network hardware.",
            "D. Choice of specific cloud hardware vendors."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
        "options": [
            "A. Fault Tolerance.",
            "B. Instance Usage.",
            "C. Infrastructure.",
            "D. Performance.",
            "E. Storage Capacity."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "What is Amazon CloudWatch?",
        "options": [
            "A. A code repository with customizable build and team commit features.",
            "B. A metrics repository with customizable notification thresholds and channels.",
            "C. A security configuration repository with threat analytics.",
            "D. A rule repository of a web application firewall with automated vulnerability prevention features."
        ],
        "answer": 1
    },
    {
        "question": "Under the AWS shared responsibility model, which of the following activities are the customer\u2019s responsibility? (Select TWO)",
        "options": [
            "A. Patching operating system components for Amazon Relational Database Server (Amazon RDS).",
            "B. Encrypting data on the client-side.",
            "C. Training the data center staff.",
            "D. Configuring Network Access Control Lists (ACL).",
            "E. Maintaining environmental controls within a data center."
        ],
        "answer": [
            1,
            3
        ]
    },
    {
        "question": "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
        "options": [
            "A. Physical controls.",
            "B. Patch management.",
            "C. Zone security.",
            "D. Data center auditing."
        ],
        "answer": 1
    },
    {
        "question": "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
        "options": [
            "A. AWS Billing and Cost Management.",
            "B. Consolidated billing.",
            "C. Amazon CloudWatch.",
            "D. Amazon QuickSight."
        ],
        "answer": 0
    },
    {
        "question": "How do customers benefit from Amazon\u2019s massive economies of scale?",
        "options": [
            "A. Periodic price reductions as the result of Amazon\u2019s operational efficiencies.",
            "B. New Amazon EC2 instance types providing the latest hardware.",
            "C. The ability to scale up and down when needed.",
            "D. Increased reliability in the underlying hardware of Amazon EC2 instances."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
        "options": [
            "A. Service control policies (SCPs).",
            "B. Consolidated billing.",
            "C. All Upfront Reserved Instances.",
            "D. AWS Cost Explorer."
        ],
        "answer": 1
    },
    {
        "question": "Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)",
        "options": [
            "A. Amazon EBS.",
            "B. Amazon Connect.",
            "C. AWS Storage Gateway.",
            "D. Amazon CloudFront.",
            "E. AWS Direct Connect."
        ],
        "answer": [
            2,
            4
        ]
    },
    {
        "question": "Which of the following services will automatically scale with an expected increase in web traffic?",
        "options": [
            "A. AWS CodePipeline.",
            "B. Elastic Load Balancing.",
            "C. Amazon EBS.",
            "D. AWS Direct Connect."
        ],
        "answer": 1
    },
    {
        "question": "Which service provides a virtually unlimited amount of online highly durable object storage?",
        "options": [
            "A. Amazon Redshift.",
            "B. Amazon Elastic File System (Amazon EFS).",
            "C. Amazon Elastic Container Service (Amazon ECS).",
            "D. Amazon S3."
        ],
        "answer": 3
    },
    {
        "question": "Which AWS feature should a customer leverage to achieve high availability of an application?",
        "options": [
            "A. AWS Direct Connect.",
            "B. Availability Zones.",
            "C. Data centers.",
            "D. Amazon Virtual Private Cloud (Amazon VPC)."
        ],
        "answer": 1
    },
    {
        "question": "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
        "options": [
            "A. AWS WAF.",
            "B. AWS Trusted Advisor.",
            "C. AWS Direct Connect.",
            "D. AWS Organizations.",
            "E. Network ACLs."
        ],
        "answer": [
            0,
            4
        ]
    },
    {
        "question": "Which of the following is a cloud architectural design principle?",
        "options": [
            "A. Scale up not out.",
            "B. Loosely couple components.",
            "C. Build monolithic systems.",
            "D. Use commercial database software."
        ],
        "answer": 1
    },
    {
        "question": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
        "options": [
            "A. Amazon CloudWatch.",
            "B. AWS CloudTrail.",
            "C. AWS Config.",
            "D. AWS Health."
        ],
        "answer": 1
    },
    {
        "question": "Where can AWS compliance and certification reports be downloaded?",
        "options": [
            "A. AWS Artifact.",
            "B. AWS Concierge.",
            "C. AWS Certificate Manager.",
            "D. AWS Trusted Advisor."
        ],
        "answer": 0
    },
    {
        "question": "The financial benefits of using AWS are: (Select TWO)",
        "options": [
            "A. Reduced Total Cost of Ownership (TCO).",
            "B. Increased capital expenditure (capex).",
            "C. Reduced operational expenditure ( opex ).",
            "D. Deferred payment plans for startups.",
            "E. Business credit lines for startups."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "Which AWS service can serve a static website?",
        "options": [
            "A. Amazon S3.",
            "B. Amazon Route 53.",
            "C. Amazon QuickSight.",
            "D. AWS X-Ray."
        ],
        "answer": 0
    },
    {
        "question": "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
        "options": [
            "A. Companies can deploy applications in multiple AWS Regions to reduce latency.",
            "B. Amazon Translate automatically translates third-party website interfaces into multiple languages.",
            "C. Amazon CloudFront has multiple edge locations around the world to reduce latency.",
            "D. Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
            "E. Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency."
        ],
        "answer": [
            0,
            2
        ]
    },
    {
        "question": "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
        "options": [
            "A. Resource groups.",
            "B. Availability Zones.",
            "C. Security groups.",
            "D. Regions.",
            "E. Amazon Machine Images (AMIS)."
        ],
        "answer": [
            1,
            3
        ]
    },
    {
        "question": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
        "options": [
            "A. Physical access controls.",
            "B. Data encryption.",
            "C. Secure disposal of storage devices.",
            "D. Environmental risk management."
        ],
        "answer": 1
    },
    {
        "question": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
        "options": [
            "A. Use AWS Budgets on each account to pay only to budget.",
            "B. Contact AWS Support for a monthly bill.",
            "C. Create an AWS Organization from the payer account and invite the other accounts to join.",
            "D. Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
        ],
        "answer": 2
    },
    {
        "question": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
        "options": [
            "A. Project management.",
            "B. Antivirus software licensing.",
            "C. Data center security.",
            "D. Software development."
        ],
        "answer": 2
    },
    {
        "question": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
        "options": [
            "A. They require the customer to monitor and replace failing instances.",
            "B. They have better performance than customer-managed services.",
            "C. They simplify patching and updating underlying OSs.",
            "D. They do not require the customer to optimize instance type or size selections.\n\n    <details markdown=1><summary markdown='span'>Answer</summary>\n      Correct Answer: C\n</details>\n\n43. Which services can be used across hybrid AWS Cloud architectures? (Select TWO)\n    - A. Amazon Route 53.\n    - B. Virtual Private Gateway.\n    - C. Classic Load Balancer.\n    - D. Auto Scaling.",
            "E. Amazon CloudWatch default metrics."
        ],
        "answer": [
            0,
            1
        ]
    },
    {
        "question": "Which statement best describes Elastic Load Balancing?",
        "options": [
            "A. It translates a domain name into an IP address using DNC.",
            "B. It distributes incoming application traffic across one or more Amazon EC2 instances.",
            "C. It collects metrics on connected Amazon EC2 instances.",
            "D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is a fast and reliable NoSQL database service?",
        "options": [
            "A. Amazon Redshift.",
            "B. Amazon RDS.",
            "C. Amazon DynamoDB.",
            "D. Amazon S3."
        ],
        "answer": 2
    },
    {
        "question": "Which AWS service would you use to obtain compliance reports and certificates?",
        "options": [
            "A. AWS Artifact.",
            "B. AWS Lambda.",
            "C. Amazon Inspector.",
            "D. AWS Certificate Manager."
        ],
        "answer": 0
    },
    {
        "question": "Which AWS services are defined as global instead of regional? (Select TWO)",
        "options": [
            "A. Amazon Route 53.",
            "B. Amazon EC2.",
            "C. Amazon S3.",
            "D. Amazon CloudFront.",
            "E. Amazon DynamoDB."
        ],
        "answer": [
            0,
            3
        ]
    },
    {
        "question": "How would an AWS customer easily apply common access controls to a large set of users?",
        "options": [
            "A. Apply an IAM policy to an IAM group.",
            "B. Apply an IAM policy to an IAM role.",
            "C. Apply the same IAM policy to all IAM users with access to the same workload.",
            "D. Apply an IAM policy to an Amazon Cognito user pool."
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is an important architectural design principle when designing cloud applications?",
        "options": [
            "A. Use multiple Availability Zones.",
            "B. Use tightly coupled components.",
            "C. Use open source software.",
            "D. Provision extra capacity."
        ],
        "answer": 0
    },
    {
        "question": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
        "options": [
            "A. AWS Server Migration Service.",
            "B. AWS Organizations.",
            "C. AWS Budgets.",
            "D. AWS Trusted Advisor."
        ],
        "answer": 1
    }
];