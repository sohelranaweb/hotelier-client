import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMeal from "../../../hooks/useMeal";

import MealTab from "./MealTab";
const MealsCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [meals] = useMeal();
  const breakfast = meals.filter((meal) => meal.category === "breakfast");
  const lunch = meals.filter((meal) => meal.category === "lunch");
  const dinner = meals.filter((meal) => meal.category === "dinner");
  // console.log(breakfast, lunch, dinner);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-2">Meals By Category</h1>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>All Meals</Tab>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
        </TabList>
        <TabPanel>
          <MealTab items={meals}></MealTab>
        </TabPanel>
        <TabPanel>
          <MealTab items={breakfast}></MealTab>
        </TabPanel>
        <TabPanel>
          <MealTab items={lunch}></MealTab>
        </TabPanel>
        <TabPanel>
          <MealTab items={dinner}></MealTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MealsCategory;
