import articlesData from '../../data/articlesData.json';

export default function handler(req, res) {
  res.status(200).json(articlesData);
}