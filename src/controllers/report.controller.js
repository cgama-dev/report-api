import path from 'path';

import ReportModel from './../models/report.model'

import UtilReport from './../util/report.util'

const ReportController = () => {

    const Report = {
        query: async (req, res) => {
            try {

                const reports = await ReportModel.find()

                return res.send({ reports })

            } catch (err) {
                return res.status(400).send({ error: 'Erro ao buscar lista de reports' })
            }

        },
        get: async (req, res) => {

            const id = req.params.id

            try {
                const report = await ReportModel.findOne({
                    _id: id
                })

                if (!report)
                    return res.status(400).send({ message: 'Esse projeto não existe na base de dados', data: report })

                const newReport = {
                    id: report.id,
                    projectName: report.projectName,
                    url: report.url,
                    data: report.data,
                    footer: report.footer,
                    helpers: report.helpers,
                    header: report.header,
                    page: report.page
                }

                return res.send(newReport)

            } catch (err) {
                console.log(err)
                return res.status(400).send({ error: 'Erro ao buscar report' })
            }

        },
        create: async (req, res) => {
            try {

                const dir = path.resolve("./src/reports/default")

                const Util = UtilReport()

                const { data, footer, header, helpers, page } = await Util.readFile(dir)

                const report = { ...req.body, data, footer, header, helpers, page }

                const reportSaved = await ReportModel.create(report)

                return res.send(reportSaved)

            } catch (err) {
                console.log(err)
                return res.status(400).send({ error: 'Erro ao criar report' })
            }
        },
        update: async (req, res) => {

            const id = req.params.id

            try {

                const report = await ReportModel.findOne({ _id: id })

                if (!report)
                    return res.status(400).send({ error: 'Esse projeto não existe na base de dados' })

                const newReport = await ReportModel.findByIdAndUpdate(id, req.body, { new: true })

                return res.send(newReport)

            } catch (err) {

                return res.status(400).send({ error: 'Ocorreu algum erro ao atualizar o projeto' })
            }

        },
        generate: async (req, res) => {

            const id = req.body.reportId

            try {

                const report = await ReportModel.findOne({ _id: id })

                if (!report)
                    return res.status(400).send({ error: 'Esse projeto não existe na base de dados' })

                const Util = UtilReport()

                const pdfData = await Util.generatePdf(report)

                res.writeHead(200, {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition': 'attachment; filename=Laudos.pdf',
                    'Content-Length': pdfData.length
                });

                return res.end(pdfData)

            } catch (err) {

                return res.status(400).send({ error: 'Erro ao renderizar PDF' })
            }
        },
        destroy: async (req, res) => {

            const id = req.params.id

            try {

                const report = await ReportModel.findByIdAndRemove({ _id: id })

                if (!report)
                    return res.status(400).send({ error: 'Esse projeto não existe na base de dados' })

                return res.send({ message: 'Projeto deletado com sucesso' })

            } catch (err) {

                return res.status(400).send({ error: 'Ocorreu algum erro ao deletar esse projeto' })
            }

        },

    }

    return Report
}

export default ReportController