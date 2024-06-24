import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

// Define my zod schema
const schema = z.object({
  age: z.number().min(0, {message: "Age cannot be less than 0"}).max(99,{message: "Age cannot be more than 99"}),
  gender: z.enum(["female", "male", "other"], {message: "Gender is required"}),
  height: z.number().min(0, {message: "Height cannot be less than 0"}),
  weight: z.number().min(0, {message: "Height cannot be less than 0"}),
  allergies: z.string().optional(),
  underlyingConditions: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  dietaryPreferences: z.string().optional(),
})

const AssessmentForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      age: 0,
      gender: "",
      height: 0,
      weight: 0,
      allergies: "",
      underlyingConditions: "",
      dietaryRestrictions: "",
      dietaryPreferences: "",
    },
    resolver: zodResolver(schema),
  });

  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="assessment_form">
      {/* ...age... */}
      <div>
        <label htmlFor="Age">Age</label>
        <input
          {...register("age", {valueAsNumber: true})}
          type="number"
          placeholder="What is your age?"
        />
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}
      </div>
      {/* ...gender... */}
      <div>
        <label htmlFor="Gender">Gender</label>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}
      </div>
      {/* ...height... */}
      <div>
        <label htmlFor="Height">Height</label>
        <div className="flex items-center">
          <input
            {...register("height", {valueAsNumber: true})}
            type="number"
            placeholder="What is your height"
          />
          <select
            value={heightUnit}
            onChange={(e) => setHeightUnit(e.target.value)}
          >
            <option value="cm">cm</option>
            <option value="in">inches</option>
          </select>
        </div>
        {errors.height && (
          <p className="text-red-500">{errors.height.message}</p>
        )}
      </div>
      {/* ...weight... */}
      <div>
        <label htmlFor="Weight">Weight</label>
        <div className="flex items-center">
          <input
            {...register("weight", {valueAsNumber: true})}
            type="number"
            placeholder="What is your weight"
          />
          <select
            value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value)}
          >
            <option value="kg">kg</option>
            <option value="lb">pounds</option>
          </select>
        </div>
        {errors.wei && <p className="text-red-500">{errors.wei.message}</p>}
      </div>
      {/* ...allergies... */}
      <div>
        <label htmlFor="Allergies">Allergies</label>
        <input
          {...register("allergies")}
          type="text"
          placeholder="Do you have any allergies"
        />
      </div>
      {/* ...underlying conditions... */}
      <div>
        <label htmlFor="underlyingConditions">
          Underlying Medical Conditions
        </label>
        <input
          {...register("underlyingConditions")}
          type="text"
          placeholder="Do you have any underlying medical conditions?"
        />
      </div>
      {/* ...dietary Restrictions... */}
      <div>
        <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
        <input
          {...register("dietaryRestrictions")}
          type="text"
          placeholder="Do you have any dietary restrictions or food intolerances?"
        />
      </div>
      {/* ...Dietary preferences... */}
      <div>
        <label htmlFor="dietaryPreference">Dietary preferences</label>
        <input
          {...register("dietaryPreference")}
          type="text"
          placeholder="What food do you prefer?"
        />
      </div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>

    // <div>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <Controller
    //     name='age'
    //     control={control}
    //     rules={{required: true}}
    //     render={({field})=>(
    //       <FormElement
    //         label= "Age"
    //         type= "number"
    //         placeholder="What is your age?"
    //         fieldRef={field}
    //         hasError={errors.name?.type === 'required'}/>
    //     )}/>

    //     <Controller
    //             name='gender'
    //             control={control}
    //             rules={{required: true}}
    //             render={({field})=>(
    //               <FormElement
    //                 label= "Gender"
    //                 type= "text"
    //                 placeholder="What is your Gender?"
    //                 fieldRef={field}
    //                 hasError={errors.name?.type === 'required'}/>
    //             )}/>

    //     {/* <Controller
    //             name='height'
    //             control={control}
    //             rules={{required: false}}
    //             render={({field})=>(
    //               <FormElement
    //                 label= "Height"
    //                 type= "number"
    //                 placeholder="What is your height?"
    //                 fieldRef={field}
    //                 hasError={errors.name?.type === 'required'}/>
    //             )}/>

    //     <Controller
    //             name='weight'
    //             control={control}
    //             rules={{required: false}}
    //             render={({field})=>(
    //               <FormElement
    //                 label= "Weight"
    //                 type= "number"
    //                 placeholder="What is your height?"
    //                 fieldRef={field}
    //                 hasError={errors.name?.type === 'required'}/>
    //             )}/> */}

    //     <Controller
    //             name='allergies'
    //             control={control}
    //             rules={{required: true}}
    //             render={({field})=>(
    //               <FormElement
    //                 label= "Allergies"
    //                 type= "text"
    //                 placeholder="Do you have any allergies?"
    //                 fieldRef={field}
    //                 hasError={errors.name?.type === 'required'}/>
    //             )}/>

    //     <Controller
    //             name='underlyingConditions'
    //             control={control}
    //             rules={{required: true}}
    //             render={({field})=>(
    //               <FormElement
    //                 label= "Underlying Medical Conditions"
    //                 type= "text"
    //                 placeholder="Do you have any underlying medical conditions?"
    //                 fieldRef={field}
    //                 hasError={errors.name?.type === 'required'}/>
    //             )}/>

    //     <Controller
    //             name='dietaryRestrictions'
    //             control={control}
    //             rules={{required: false}}
    //             render={({field})=>(
    //               <FormElement
    //                 label= "Dietary Restrictions"
    //                 type= "text"
    //                 placeholder="Do you have any dietary restrictions or food intolerances?"
    //                 fieldRef={field}
    //                 hasError={errors.name?.type === 'required'}/>
    //             )}/>

    //     <Controller
    //             name='dietaryPreference'
    //             control={control}
    //             rules={{required: false}}
    //             render={({field})=>(
    //               <FormElement
    //                 label= "Dietary preferences"
    //                 type= "text"
    //                 placeholder="What food do you prefer?"
    //                 fieldRef={field}
    //                 hasError={errors.name?.type === 'required'}/>
    //             )}/>
    //             <button type='submit' className='w-1/2 bg-green-dark text-white text-lg font-bold py-2 my-6 px-4 rounded-xl transition-all ease-in-out hover:translate-x-1 hover:scale-110 shadow-md md:px-8 capitalize hover:bg-lime-800 '>Submit</button>
    //   </form>
    // </div>
  );
};

export default AssessmentForm;
