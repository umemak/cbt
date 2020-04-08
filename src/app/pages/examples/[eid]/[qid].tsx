import * as React from 'react'
import { NextPageContext } from 'next'

import { Example, Question, Progress } from '../../../interfaces'
import Layout from '../../../components/Layout'
import QuestionListDetail from '../../../components/QuestionListDetail'
import { sampleFetchWrapper } from '../../../utils/sample-api'

type Props = {
    example?: Example
    question?: Question
    errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
    static getInitialProps = async ({ query }: NextPageContext) => {
        try {
            const { eid, qid } = query
            console.log("eid: " + eid)
            // console.log("qid: " + qid)
            const hostname = (typeof window !== "undefined") ? 'https://' + window.location.hostname : 'http://localhost:3000'
            // console.log("host: " + hostname)
            const question = await sampleFetchWrapper(
                `${hostname}/api/examples/${eid}/${qid}`
            )
            // console.log("item: " + JSON.stringify(item))
            return { question }
        } catch (err) {
            return { errors: err.message }
        }
    }

    render() {
        const { example, question, errors } = this.props
        const progress: Progress = { answers: [{qid: '1', answer: '', fixed: false, flagged: false}]}

        if (errors) {
            return (
                <Layout title={`Error | Next.js + TypeScript Example`}>
                    <p>
                        <span style={{ color: 'red' }}>Error:</span> {errors}
                    </p>
                </Layout>
            )
        }

        return (
            <Layout
                title={`${
                    example ? example.name : 'Example Detail'
                    } | Next.js + TypeScript Example`}
            >
                {question && <QuestionListDetail item={question} progress={progress} />}
            </Layout>
        )
    }
}

export default InitialPropsDetail
