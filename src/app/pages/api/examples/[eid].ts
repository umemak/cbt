import { NextApiRequest, NextApiResponse } from 'next';
import { sampleExampleData } from '../../../utils/sample-data';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { eid } = req.query;
    const selected = sampleExampleData.find((data) => data.id === eid);

    if (!selected) {
      throw new Error('Cannot find example');
    }

    res.status(200).json(selected);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
