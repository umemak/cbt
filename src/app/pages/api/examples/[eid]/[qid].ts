import { NextApiRequest, NextApiResponse } from 'next';
import { sampleExampleData } from '../../../../utils/sample-data';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { eid, qid } = req.query;
    const example = sampleExampleData.find((data) => data.id === eid);
    const selected =
      example && example.questions.find((data) => data.id === qid);

    if (!selected) {
      throw new Error('Cannot find question');
    }

    res.status(200).json(selected);
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
