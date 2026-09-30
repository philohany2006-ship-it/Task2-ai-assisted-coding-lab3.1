import { Router } from 'express';
import {
  getAllReviews,
  getReview,
  createReview,
  getReviewSummary
} from '../controllers/reviewController.js';

const router = Router();

router.get('/', getAllReviews);
router.get('/summary', getReviewSummary);
router.get('/:id', getReview);
router.post('/', createReview);

export default router;
