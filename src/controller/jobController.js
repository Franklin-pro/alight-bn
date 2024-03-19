import job from "../model/job.js";
import errormessage from "../utils/errormessage.js";
import successmessege from "../utils/successmessage.js";
import jwt from "jsonwebtoken";

class jobController {
  static async createjob(req, res) {
    try {
      const jobs = await job.create(req.body);
      if (!jobs) {
        return errormessage(res, 401, 'job is not created')
      } else {
        return successmessege(res, 201, 'job is created', jobs);
      }
    } catch (error) {
      return errormessage(res, 500, error)
    }
  }

  static async getAlljob(req, res) {
    try {
      const jobs = await job.find();
      if (!jobs || jobs.length == 0) {
        return errormessage(res, 401, "no job found");
      } else {
        const status = 200;
        const msg = `all ${jobs.length} jobs Found`;
        const data = jobs;
        return successmessege(res, status, msg, data);
      }
    } catch (error) {
      return errormessage(res, 500, error)
    }
  }

  static async getOnejob(req, res) {
    const id = req.params.id
    try {
      const jobs = await job.findById(id)
      if (!jobs) {
        return errormessage(res, 401, `jobs with id ${id} not found`);
      } else {
        return successmessege(res, 200, `jobs is retrived`, jobs)
      }
    } catch (error) {
      return errormessage(res, 404, error);
    }
  }

  static async deleteAlljob(req, res) {
    try {
      const jobs = await job.deleteMany();
      if (!jobs) {
        return errormessage(res, 401, `jobs not deleted`)
      } else {
        return successmessege(res, 201, `all jobs successlfuly deleted`)
      }
    } catch (error) {
      return errormessage(res, 500, error)
    }
  }

  static async deleteOnejob(req, res) {
    const id = req.params.id;
    try {
      if (id.length !== 24 || id.length > 24) {
        return errormessage(res, 401, 'invalid id ')
      }
      const jobs = await job.findByIdAndDelete(id);
      if (!jobs) {
        errormessage(res, 401, `job with id ${id} not found`);
      } else {
        successmessege(res, 200, `job successfuly deleted`, jobs);
      }
    } catch (error) {
      return errormessage(res, 500, error)
    }
  }

  static async updatejob(req, res) {
    const id = req.params.id;
    try {
      if (id.length !== 24 || id.length > 24) {
        return errormessage(res, 401, 'invalid id ')
      }
      const jobs = await job.findByIdAndUpdate(id, req.body);
      if (!jobs) {
        errormessage(res, 401, `job with id ${id} not found`);
      } else {
        return successmessege(res, 200, `job successfuly update`, jobs);
      }
    } catch (error) {
      return errormessage(res, 500, error)
    }
  }
}

export default jobController;
