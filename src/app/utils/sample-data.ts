import { User, Example } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const sampleExampleData: Example[] = [
  {
    id: 'sample',
    name: 'サンプルテスト',
    questions: [
      {
        id: 'Q1',
        body: 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?',
        choices: [
          {
            id: 'A',
            text: 'Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.',
            correct: false
          },
          {
            id: 'B',
            text: 'Customers retain full administrative access to their Amazon EC2 instances.',
            correct: false
          },
          {
            id: 'C',
            text: 'Amazon EC2 instances can be launched on-demand when needed.',
            correct: true
          },
          {
            id: 'D',
            text: 'Customers can permanently run enough instances to handle peak workloads.',
            correct: false
          },
        ],
        type: 'radio',
        answer: 'C',
        explanation: 'The ability to launch instances on-demand when needed allows customers launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load.'
      },
      {
        id: 'Q2',
        body: 'Your company’s on-premises content management system has the following architecture:\n* Application Tier – Java code on a JBoss application server\n* Database Tier – Oracle database regularly backed up to Amazon Simple Storage Service (S3) using the Oracle RMAN backup utility\n* Static Content – stored on a 512GB gateway stored Storage Gateway volume attached to the application server via the iSCSI interface\n\nWhich AWS based disaster recovery strategy will give you the best RTO? ',
        choices: [
          {
            id: 'A',
            text: 'Deploy the Oracle database and the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon S3. Generate an EBS volume of static content from the Storage Gateway and attach it to the JBoss EC2 server. ',
            correct: false
          },
          {
            id: 'B',
            text: 'Deploy the Oracle database on RDS. Deploy the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon Glacier. Generate an EBS volume of static content from the Storage Gateway and attach it to the JBoss EC2 server. ',
            correct: false
          },
          {
            id: 'C',
            text: 'Deploy the Oracle database and the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon S3. Restore the static content by attaching an AWS Storage Gateway running on Amazon EC2 as an iSCSI volume to the JBoss EC2 server. ',
            correct: true
          },
          {
            id: 'D',
            text: 'Deploy the Oracle database and the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon S3. Restore the static content from an AWS Storage Gateway-VTL running on Amazon EC2',
            correct: false
          },
        ],
        type: 'radio',
        answer: '',
        explanation: '回答も解説もない例題だった'
      }
    ]
  },
  {
    id: 'sample2',
    name: 'サンプルテスト2',
    questions: [
    ]
  }
]
