import { Truth } from "../model/dbModel.js";
import db from "../config/database.js";

export const GetTruth = async (req, res) => {
    try {
        const truth_qst = await Truth.findAll({
            attributes: ['id', 'question']
        });
        res.json(truth_qst)
    } catch (error) {
        console.log(error)
    };
};

export const PostTruth = async (req, res) => {
    const { question } = req.body;
    console.log(req.body)
    try {
        await Truth.create({
            question: question
        });
        res.json({msg: 'Truth Question Berhasil Ditambahkan'})
    } catch (error) {
        console.log(error)
    };
};

export const DeleteTruth = async (req, res) => {
    const { id } = req.body;
    try {
        await Truth.destroy({
            where: {
                id: id
            }
        });
        await db.query('ALTER TABLE truth DROP id');
        await db.query('ALTER TABLE truth ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST')
        await db.query('ALTER TABLE truth AUTO_INCREMENT = 1');
        res.json({msg: `Data ${id} berhasil dihapus`});
    } catch (error) {
        console.log(error)
    };
};

export const ResetTruth = async (req, res) => {
    try {
        await Truth.destroy({
            truncate: true
        });
        res.json({msg: "semua pertanyaan berhasil dihapus!!"});
    } catch (error) {
        console.log(error);
    };
};