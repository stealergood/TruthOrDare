import { Dare } from "../model/dbModel.js";
import db from "../config/database.js";

export const GetDare = async (req, res) => {
    try {
        const dare_qst = await Dare.findAll({
            attributes: ['id', 'question']
        });
        res.json(dare_qst)
    } catch (error) {
        console.log(error)
    };
};

export const PostDare = async (req, res) => {
    const { question } = req.body;
    console.log(req.body)
    try {
        await Dare.create({
            question: question
        });
        res.json({msg: 'Dare Question Berhasil Ditambahkan'})
    } catch (error) {
        console.log(error)
    };
};

export const DeleteDare = async (req, res) => {
    const { id } = req.body;
    try {
        await Dare.destroy({
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

export const ResetDare = async (req, res) => {
    try {
        await Dare.destroy({
            truncate: true
        });
        res.json({msg: "semua pertanyaan berhasil dihapus!!"});
    } catch (error) {
        console.log(error);
    };
};