import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from '../helpers'
import moment from 'moment';


export const useTask = (selectedProject) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsub = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "1111");

    unsub =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsub = unsub.where("projetId", "==", selectedProject))
        : selectedProject == "TODAY"
        ? (unsub = unsub.where("date", "==", moment().format("DD/MM/YYYY")))
        : selectedProject === "ALERTS" || selectedProject === 0
        ? (unsub = unsub.where("date", "==", ""))
        : unsub;
  }, [selectedProject]);
};
