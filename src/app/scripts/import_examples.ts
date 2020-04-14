import commander from 'commander';
import admin from 'firebase-admin';
import fs from 'fs';
import parse from 'csv-parse/lib/sync';
import util from 'util';

// import { Example, Question, Choice } from '../interfaces';
type Example = {
  eid: string;
  name: string;
  questions: Question[];
};

type Question = {
  qid: string;
  body: string;
  choices: Choice[];
  type: string;
  answer: string;
  explanation: string;
};

type Choice = {
  cid: string;
  text: string;
};

// import { collectionName } from '../lib/constants';
const collectionName = {
  examples: 'examples',
  users: 'users',
} as const;

// import { addCounter } from '../firestore-admin/record-counter';

// import serviceAccount from '../../../firebase-adminsdk.json';

// admin.initializeApp({
//   // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
// });

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://cbtest-6f5bf.firebaseio.com',
});

const db = admin.firestore();

const uploadSeed = async (collection: string, seedFile: string) => {
  // const buffer = fs.readFileSync(seedFile);
  // const records = parse(buffer.toString(), {
  //   columns: true,
  //   delimiter: '\t',
  //   skip_empty_lines: true, // eslint-disable-line @typescript-eslint/camelcase
  // });
  const records = [
    {
      eid: 'sample',
      name: 'サンプルテスト',
      questions: [
        {
          qid: 'Q1',
          body: 'EC2の説明として正しいものは次のうちどれですか。',
          type: 'radio',
          choices: [
            {
              cid: 'A',
              text: 'データベースサービス',
            },
            {
              cid: 'B',
              text: '仮想サーバー',
            },
            {
              cid: 'C',
              text: 'オブジェクトストレージ',
            },
            {
              cid: 'D',
              text: 'アカウント管理サービス',
            },
          ],
          answer: 'B',
          explanation:
            'データベースサービスはRDSです。\n仮想サーバーはEC2です。\nオブジェクトストレージはS3です。\nアカウント管理サービスはIAMです。',
        },
        {
          qid: 'Q2',
          body: 'RDSの説明として正しいものは次のうちどれですか。',
          type: 'radio',
          choices: [
            {
              cid: 'A',
              text: 'データベースサービス',
            },
            {
              cid: 'B',
              text: '仮想サーバー',
            },
            {
              cid: 'C',
              text: 'オブジェクトストレージ',
            },
            {
              cid: 'D',
              text: 'アカウント管理サービス',
            },
          ],
          answer: 'A',
          explanation:
            'データベースサービスはRDSです。\n仮想サーバーはEC2です。\nオブジェクトストレージはS3です。\nアカウント管理サービスはIAMです。',
        },
      ],
    },
    {
      eid: 'example2',
      name: 'サンプルテスト2',
      questions: [
        {
          qid: 'Q1',
          body: 'S3の説明として正しいものは次のうちどれですか。',
          type: 'radio',
          choices: [
            {
              cid: 'A',
              text: 'データベースサービス',
            },
            {
              cid: 'B',
              text: '仮想サーバー',
            },
            {
              cid: 'C',
              text: 'オブジェクトストレージ',
            },
            {
              cid: 'D',
              text: 'アカウント管理サービス',
            },
          ],
          answer: 'C',
          explanation:
            'データベースサービスはRDSです。\n仮想サーバーはEC2です。\nオブジェクトストレージはS3です。\nアカウント管理サービスはIAMです。',
        },
        {
          qid: 'Q2',
          body: 'IAMの説明として正しいものは次のうちどれですか。',
          type: 'radio',
          choices: [
            {
              cid: 'A',
              text: 'データベースサービス',
            },
            {
              cid: 'B',
              text: '仮想サーバー',
            },
            {
              cid: 'C',
              text: 'オブジェクトストレージ',
            },
            {
              cid: 'D',
              text: 'アカウント管理サービス',
            },
          ],
          answer: 'D',
          explanation:
            'データベースサービスはRDSです。\n仮想サーバーはEC2です。\nオブジェクトストレージはS3です。\nアカウント管理サービスはIAMです。',
        },
      ],
    },
  ];
  console.log(util.inspect(records, { depth: 5 }));
  const ref = db.collection(collection);

  switch (collection) {
    case collectionName.examples: {
      const docs: Required<Example>[] =
        records.map((record: Example) => ({
          ...record,
        })) || [];

      for await (const doc of docs) {
        const { eid, ...docWithoutId } = doc;
        await ref.doc(eid).set(docWithoutId);
      }

      return;
    }

    default: {
      throw new Error('specify target collection');
    }
  }
};

commander
  .version('0.1.0', '-v, --version')
  .arguments('<collection> <seedFile>')
  .action(uploadSeed);

commander.parse(process.argv);
