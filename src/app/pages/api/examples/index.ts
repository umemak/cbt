import { NextApiRequest, NextApiResponse } from 'next'
import { sampleExampleData } from '../../../utils/sample-data'

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleExampleData)) {
      throw new Error('Cannot find example data')
    }

    res.status(200).json(sampleExampleData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
