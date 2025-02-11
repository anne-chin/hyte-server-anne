import express from 'express';
import {getEntries, getEntryById, postEntry, putEntry, deleteEntry} from '../controllers/entry-controller';

const entryRouter = express.Router();

// all routes to /api/users
entryRouter.route('/')
  .get(getEntries)

// all routes to /api/users/:id
entryRouter.route('/:id')
  .get(getEntryById)
  .put(putEntry)
  .delete(deleteEntry);


export default entryRouter;

