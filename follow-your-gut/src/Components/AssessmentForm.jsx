import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define my zod schema
const schema = z.object({
  age: z
    .number()
    .min(0, { message: "Age cannot be less than 0" })
    .max(99, { message: "Age cannot be more than 99" }),
  gender: z.enum(["female", "male", "other"], {
    message: "Gender is required",
  }),
  height: z.number().min(0, { message: "Height cannot be less than 0" }),
  weight: z.number().min(0, { message: "Height cannot be less than 0" }),
  activityLevel: z.enum(["sedentary", "moderately active", "very active"], {
    message: "Your activity level is required",
  }),
  goal: z.enum(["weight loss", "muscle gain", "maintain"], {
    message: "Fitness goals required",
  }),
  allergies: z.string({ message: "write none if you have no allergies" }),
  underlyingConditions: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  dietaryPreferences: z.string({
    message: "Required to personalize your meal plan",
  }),
});

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
      activityLevel: "",
      goal: "",
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="assessment_form w-full flex flex-col px-6 gap-2 lg:pr-20 "
    >
      {/* ...age... */}
      <div className="flex flex-col">
        <label className="text-green-dark font-semibold " htmlFor="Age">
          Age
        </label>
        <input
          className="p-2 border-b border-green-dark"
          {...register("age", { valueAsNumber: true })}
          type="number"
          placeholder="What is your age?"
        />
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}
      </div>
      {/* ...gender... */}
      <div className="flex flex-col">
        <label className="text-green-dark font-semibold " htmlFor="Gender">
          Gender
        </label>
        <select className="capitalize p-2" {...register("gender")}>
          <option value="">Select...</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}
      </div>
      {/* ...height... */}
      <div className="flex flex-col">
        <label className="text-green-dark font-semibold " htmlFor="Height">
          Height
        </label>
        <div className="flex justify-between items-center">
          <input
            className="p-2 border-b border-green-dark w-2/3"
            {...register("height", { valueAsNumber: true })}
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
      <div className="flex flex-col">
        <label className="text-green-dark font-semibold " htmlFor="Weight">
          Weight
        </label>
        <div className="flex justify-between items-center">
          <input
            className="p-2 border-b border-green-dark w-2/3"
            {...register("weight", { valueAsNumber: true })}
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
      {/* ...activity level... */}
      <div className="flex flex-col">
        <label
          className="text-green-dark font-semibold "
          htmlFor="activityLevel"
        >
          Activity Level
        </label>
        <select className="capitalize p-2" {...register("activityLevel")}>
          <option value="">Select...</option>
          <option value="sedentary">sedentary</option>
          <option value="moderately active">moderately active</option>
          <option value="very active">very active</option>
        </select>
        {errors.activityLevel && (
          <p className="text-red-500">{errors.activityLevel.message}</p>
        )}
      </div>
      {/* ...goals... */}
      <div className="flex flex-col">
        <label className="text-green-dark font-semibold " htmlFor="goal">
          Goal
        </label>
        <select className="capitalize p-2" {...register("goal")}>
          <option value="">Select...</option>
          <option value="weight loss">weight loss</option>
          <option value="muscle gain">muscle gain</option>
          <option value="maintain">maintain</option>
        </select>
      </div>
      {/* ...allergies... */}
      <div className="flex flex-col">
        <label className="text-green-dark font-semibold " htmlFor="Allergies">
          Allergies
        </label>
        <input
          className="p-2 border-b border-green-dark"
          {...register("allergies")}
          type="text"
          placeholder="Do you have any allergies"
        />
      </div>
      {/* ...underlying conditions... */}
      <div className="flex flex-col">
        <label
          className="text-green-dark font-semibold "
          htmlFor="underlyingConditions"
        >
          Underlying Medical Conditions
        </label>
        <input
          className="p-2 border-b border-green-dark"
          {...register("underlyingConditions")}
          type="text"
          placeholder="Do you have any underlying medical conditions?"
        />
      </div>
      {/* ...dietary Restrictions... */}
      <div className="flex flex-col">
        <label
          className="text-green-dark font-semibold "
          htmlFor="dietaryRestrictions"
        >
          Dietary Restrictions
        </label>
        <input
          className="p-2 border-b border-green-dark"
          {...register("dietaryRestrictions")}
          type="text"
          placeholder="Do you have any dietary restrictions or food intolerances?"
        />
      </div>
      {/* ...Dietary preferences... */}
      <div className="flex flex-col">
        <label
          className="text-green-dark font-semibold "
          htmlFor="dietaryPreference"
        >
          Dietary preferences
        </label>
        <input
          className="p-2 border-b border-green-dark"
          {...register("dietaryPreference")}
          type="text"
          placeholder="What food do you prefer?"
        />
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-1/2 bg-green-dark text-white text-lg font-bold py-2 my-6 px-4 rounded-xl transition-all ease-in-out hover:translate-x-1 hover:scale-110 shadow-md md:px-8 capitalize hover:bg-lime-800 "
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default AssessmentForm;
