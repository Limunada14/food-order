import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

import classes from './registerPage.module.css';

function RegisterPage() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  async function submit(data) {}

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Register" />
        <form onSubmit={handleSubmit(submit)} noValidate></form>
      </div>
    </div>
  );
}
export default RegisterPage;
