import * as yup from 'yup';

const movieValidations = yup.object({
  name: yup.string().required(),
  director: yup.string().required(),
  bgImg: yup.string().url().required(),
  cast: yup.string().required(),
  genre: yup.string().required(),
  rating: yup.string().required(),
  description: yup.string().required(),
  runTime: yup.number().required(),
  releaseDate: yup.string().required(),
  trailers: yup.array().of(yup.string()).default([]),
  coverImg: yup.string().url().required(),
  ageRes: yup.number().required(),
  halls: yup.array().of(yup.string()).default([]),
  cinemas: yup.array().default([]),
  sessionTimes: yup.array().of(yup.string()).default([]),
});

export default movieValidations;