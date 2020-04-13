import * as React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { Example, Answer } from '../interfaces';
import { useUser } from '../context/userContext';
import { db } from '../firebase/clientApp';

type Props = {
  example: Example;
  answers: Answer[];
};

const ExampleFinish: React.FunctionComponent<Props> = ({
  answers,
  example,
}) => {
  const { loadingUser, user } = useUser();
  const [theanswers, setAnswers] = React.useState(answers);

  React.useEffect(() => {
    if (!loadingUser) {
      const { uid } = user;
      const answerRef = db.collection('answers').doc(`${uid}:${example.id}`);
      answerRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            setAnswers(doc.get('answers'));
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    }
  }, [loadingUser, user, example]);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>設問</Table.HeaderCell>
          <Table.HeaderCell>正否</Table.HeaderCell>
          <Table.HeaderCell>回答</Table.HeaderCell>
          <Table.HeaderCell>正解</Table.HeaderCell>
          <Table.HeaderCell>解説</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {theanswers &&
          theanswers.map((answer) => {
            const question = example.questions.find((q) => q.id === answer.qid);

            return (
              <Table.Row key={answer.qid}>
                <Table.Cell>{answer.qid}</Table.Cell>
                <Table.Cell>
                  {question && question.answer === answer.answer ? (
                    <Icon name="circle outline" color="green" />
                  ) : (
                    <Icon name="x" color="red" />
                  )}
                </Table.Cell>
                <Table.Cell>{answer.answer}</Table.Cell>
                <Table.Cell>{question && question.answer}</Table.Cell>
                <Table.Cell>{question && question.explanation}</Table.Cell>
              </Table.Row>
            );
          })}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan="5">正答数：999/999 正答率：100％</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default ExampleFinish;
