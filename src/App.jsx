import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/Job/JobCard";
import { useEffect, useState } from "react";
import { firestore } from "./firebase/config";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { CircularProgress, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import ViewJobModal from "./components/Job/ViewJobModal";
import { StyledButton } from './components/Job/JobCardUi'

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [viewJob, setViewJob] = useState({});
  const messagesRef = collection(firestore, "jobs");

  const fetchJobs = async () => {
    setCustomSearch(false);
    setLoading(true);
    const queryMessages = await query(messagesRef, orderBy("postedOn", "desc"));

    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        const postedOn = doc.data().postedOn;
        const message = {
          ...doc.data(),
          id: doc.id,
          postedOn: postedOn ? postedOn.toDate() : null,
        };
        messages.push(message);
      });
      // console.log(messages);
      setJobs(messages);
      setLoading(false);
    });

    return () => unsubscribe();
  };
  const fetchJobsCustom = async (jobSearch) => {
    setLoading(true);
    setCustomSearch(true);
    const queryMessages = await query(
      messagesRef,
      orderBy("postedOn", "desc"),
      where("location", "==", jobSearch.location),
      where("type", "==", jobSearch.type)
    );

    const unsubscribe = await onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        const postedOn = doc.data().postedOn;
        const message = {
          ...doc.data(),
          id: doc.id,
          postedOn: postedOn ? postedOn.toDate() : null,
        };
        messages.push(message);
      });
      // console.log(messages);
      setJobs(messages);
      setLoading(false);
    });
    return () => unsubscribe();
  };
  const postJob = async (jobDetails) => {
    if (jobDetails === "") return;
    await addDoc(messagesRef, {
      ...jobDetails,
      postedOn: serverTimestamp(),
    });
  };

  useEffect(() => {
    fetchJobs();
  }, [setJobs]);

  return (
    <div className="App">
      <Header postJob={postJob} />
      <ViewJobModal job={viewJob} closeModal={() => setViewJob({})} />
      <Grid mb={3} container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar fetchJobsCustom={fetchJobsCustom} />
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <>
              {customSearch && (
                <Box my={2} display="flex" justifyContent="flex-end">
                  <StyledButton onClick={fetchJobs}>
                    İlan Sayfasına Dön
                    <CloseIcon size={20} />
                  </StyledButton>
                </Box>
              )}
              {jobs.map((job) => (
                <JobCard  open={() => setViewJob(job)} key={job.id} {...job} />
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
