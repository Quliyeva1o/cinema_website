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
import { useGetMoviesQuery } from "../../../redux/MoviesSlice.jsx";

const AddEvent = () => {
    const user = useSelector((state) => state.user);
    const token = Cookies.get("token");
    const navigate = useNavigate();
    const { data: movies } = useGetMoviesQuery();

    const [moviess, setmovies] = useState([]);
    const [myMovies, setMyMovies] = useState([])

    useEffect(() => {
        movies && setMyMovies(movies.data)
    }, [movies]);


    useEffect(() => {
        if (user.role !== "admin") {
            navigate("/admin/login");
        }
    }, [navigate, user]);


    useEffect(() => {
        controller.getAll("/api/movies", token).then((res) => {
            setmovies(
                res?.data.map((movie) => ({
                    value: movie._id,
                    label: movie.name,
                }))
            );
        });
    }, [token]);
    console.log(moviess);
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            img: null,
            movies: [],
        },
        onSubmit: async (values, actions) => {
            const movieIds = values.movies.map((movie) => movie.value);

            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("description", values.description);
            formData.append("img", values.img);
            formData.append("movies",JSON.stringify(movieIds));
            console.log(values);
            console.log(movieIds);

            try {
                await controller.post("/api/events", formData, token);
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

   
    const handleImageChangee = (event) => {
        formik.setFieldValue("img", event.currentTarget.files[0]);
    };
    return (
        <div className={styles.add}>
            <h3 style={{ textAlign: "center", marginBottom: "14px" }}>
                Add New Event
            </h3>
            <form
                encType="multipart/form-data"
                onSubmit={formik.handleSubmit}

            >
                <TextField
                    name="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    id="title"
                    type="text"
                    label="Title"
                    variant="outlined"
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />


                <Select
                    id="movies"
                    name="movies"
                    onChange={(selectedOptions) => {
                        formik.setFieldValue("movies", selectedOptions);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.movies}
                    options={moviess}
                    isMulti
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Select movies"
                />
                {formik.touched.movies && formik.errors.movies && (
                    <span style={{ color: "red" }}>{formik.errors.movies}</span>
                )}

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
                    name="img"
                    onChange={handleImageChangee}
                    onBlur={formik.handleBlur}
                    id="img"
                    type="file"
                    label="img"
                    variant="outlined"
                    accept="image/*"
                    error={formik.touched.img && Boolean(formik.errors.img)}
                    helperText={formik.touched.img && formik.errors.img}
                />


                <Button variant="contained" color="primary" type="submit">
                    Add
                </Button>
            </form>
        </div>
    );
};

export default AddEvent;
