import express from "express";
import mongoose from "mongoose";
import User from "../models/user.js";
import ReportUser from "../models/reportUser.js";
import { httpStatusCodes } from "../utils/httpStatusCode.js";

export const getAllReportUserRequests = async (req, res) => {
  try {
    const requests = await ReportUser.find({ status: "pending" });
    const users = await User.find();

    let pendingReports = [];
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < requests.length; j++)
        if (requests[j].userReportId.equals(users[i]._id)) {
          pendingReports.push(users[i]._id);
        }
    }

    return res.status(httpStatusCodes.ok).json(requests);
  } catch (error) {
    return res
      .status(httpStatusCodes.internalServerError)
      .json({ message: error.message });
  }
};

export const createReportUser = async (req, res) => {
  try {
    const report = req.body;
    const newReport = new ReportUser(report);
    await newReport.save();
    res.status(httpStatusCodes.created).json(newReport);
  } catch (error) {
    res
      .status(httpStatusCodes.internalServerError)
      .json({ message: error.message });
  }
};

export const acceptReportUser = async (req, res) => {
  try {
    const { idReport } = req.params;
    let Report = await ReportUser.findById(idReport);

    Report.status = "accept";
    await Report.save();
    res.status(httpStatusCodes.ok).json(Report);
  } catch (error) {
    res
      .status(httpStatusCodes.internalServerError)
      .json({ message: error.message });
  }
};

export const denyReportUser = async (req, res) => {
  try {
    const { idReport } = req.params;
    let Report = await ReportUser.findById(idReport);

    Report.status = "deny";
    await Report.save();
    res.status(httpStatusCodes.ok).json(Report);
  } catch (error) {
    res
      .status(httpStatusCodes.internalServerError)
      .json({ message: error.message });
  }
};
