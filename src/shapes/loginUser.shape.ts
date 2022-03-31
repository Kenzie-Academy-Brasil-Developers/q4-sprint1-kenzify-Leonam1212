import * as yup from 'yup';

const loginUserShape = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default loginUserShape;
