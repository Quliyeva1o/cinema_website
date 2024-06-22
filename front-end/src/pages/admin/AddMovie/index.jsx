import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import Select from "react-select";
import controller from "../../../API/requests.js";
import Movie from "../../../classes/Movie.js";
import styles from "./index.module.scss";

const AddMovie = () => {
    const user = useSelector((state) => state.user);
    const [cinemass, setCinemas] = useState([]);
    const token = Cookies.get("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (user.role !== "admin") {
            navigate("/");
        }
    }, [navigate, user]);

    useEffect(() => {
        controller.getAll("/api/halls", token).then((res) => {
            setCinemas(
                res?.data.map((cinema) => ({
                    value: cinema._id,
                    label: cinema.name,
                }))
            );
        });
    }, [token]);

    const formik = useFormik({
        initialValues: {
            name: "",
            director: "",
            bgImg: null, // Changed to null for file upload
            cast: "",
            genre: "",
            rating: "",
            description: "",
            runTime: "",
            releaseDate: "",
            trailers: [],
            coverImg: "",
            ageRes: "",
            halls: [],
            sessionTimes: [],
            cinemas: [],
        },
        onSubmit: async (values, actions) => {
            const cinemaIds = values.cinemas.map((cinema) => cinema.value);

            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("director", values.director);
            formData.append("bgImg", values.bgImg); // Append file
            formData.append("cast", values.cast);
            formData.append("genre", values.genre);
            formData.append("rating", values.rating);
            formData.append("description", values.description);
            formData.append("runTime", values.runTime);
            formData.append("releaseDate", values.releaseDate);
            formData.append("trailers", JSON.stringify(values.trailers)); // Convert array to string
            formData.append("coverImg", values.coverImg);
            formData.append("ageRes", values.ageRes);
            formData.append("halls", JSON.stringify(values.halls)); // Convert array to string
            formData.append("sessionTimes", JSON.stringify(values.sessionTimes)); // Convert array to string
            formData.append("cinemas", JSON.stringify(cinemaIds)); // Convert array to string

            try {
                await controller.post("/api/movies", formData, token);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "New Movie Added",
                    showConfirmButton: false,
                    timer: 1000,
                });
                actions.resetForm();
            } catch (error) {
                console.error("Error adding movie:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        },
    });

    const handleImageChange = (event) => {
        formik.setFieldValue("bgImg", event.currentTarget.files[0]);
    };

    return (
        <div className={styles.add}>
            <h3 style={{ textAlign: "center", marginBottom: "14px" }}>
                Add New Movie
            </h3>
            <form
                encType="multipart/form-data"
                onSubmit={formik.handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
                <TextField
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    id="name"
                    type="text"
                    label="Name"
                    variant="outlined"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    name="director"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.director}
                    id="director"
                    type="text"
                    label="Director"
                    variant="outlined"
                    error={formik.touched.director && Boolean(formik.errors.director)}
                    helperText={formik.touched.director && formik.errors.director}
                />
                <input
                    onChange={handleImageChange}
                    className="form-control"
                    id="bgImg"
                    name="bgImg"
                    onBlur={formik.handleBlur}
                    type="file"
                    accept="image/*"
                />
                {formik.touched.bgImg && formik.errors.bgImg && (
                    <span style={{ color: "red" }}>{formik.errors.bgImg}</span>
                )}
                <TextField
                    name="cast"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cast}
                    id="cast"
                    type="text"
                    label="Cast"
                    variant="outlined"
                    error={formik.touched.cast && Boolean(formik.errors.cast)}
                    helperText={formik.touched.cast && formik.errors.cast}
                />
                <TextField
                    name="genre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.genre}
                    id="genre"
                    type="text"
                    label="Genre"
                    variant="outlined"
                    error={formik.touched.genre && Boolean(formik.errors.genre)}
                    helperText={formik.touched.genre && formik.errors.genre}
                />
                <TextField
                    name="rating"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rating}
                    id="rating"
                    type="text"
                    label="Rating"
                    variant="outlined"
                    error={formik.touched.rating && Boolean(formik.errors.rating)}
                    helperText={formik.touched.rating && formik.errors.rating}
                />
                <TextField
                    name="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    id="description"
                    multiline
                    rows={10}
                    placeholder="Description"
                    variant="outlined"
                    error={
                        formik.touched.description && Boolean(formik.errors.description)
                    }
                    helperText={
                        formik.touched.description && formik.errors.description
                    }
                />
                <TextField
                    name="runTime"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.runTime}
                    id="runTime"
                    type="number"
                    label="Run Time (minutes)"
                    variant="outlined"
                    error={formik.touched.runTime && Boolean(formik.errors.runTime)}
                    helperText={formik.touched.runTime && formik.errors.runTime}
                />
                <TextField
                    name="releaseDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.releaseDate}
                    id="releaseDate"
                    type="text"
                    label="Release Date"
                    variant="outlined"
                    error={
                        formik.touched.releaseDate && Boolean(formik.errors.releaseDate)
                    }
                    helperText={
                        formik.touched.releaseDate && formik.errors.releaseDate
                    }
                />
                <TextField
                    name="coverImg"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.coverImg}
                    id="coverImg"
                    type="text"
                    label="Cover Image URL"
                    variant="outlined"
                    error={formik.touched.coverImg && Boolean(formik.errors.coverImg)}
                    helperText={formik.touched.coverImg && formik.errors.coverImg}
                />
                <TextField
                    name="ageRes"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ageRes}
                    id="ageRes"
                    type="number"
                    label="Age Restriction"
                    variant="outlined"
                    error={formik.touched.ageRes && Boolean(formik.errors.ageRes)}
                    helperText={formik.touched.ageRes && formik.errors.ageRes}
                />
                <Select
                    id="cinemas"
                    name="cinemas"
                    onChange={(selectedOptions) => {
                        formik.setFieldValue("cinemas", selectedOptions);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.cinemas}
                    options={cinemass}
                    isMulti
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Select cinemas"
                />
                {formik.touched.cinemas && formik.errors.cinemas && (
                    <span style={{ color: "red" }}>{formik.errors.cinemas}</span>
                )}
                <Button variant="contained" color="primary" type="submit">
                    Add
                </Button>
            </form>
        </div>
    );
};

export default AddMovie;
