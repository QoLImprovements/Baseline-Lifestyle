/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172089",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 283.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Spaghetti with meat sauce, frozen entree",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 15.2,
    "energy_kcal": 90.0,
    "fat_g": 1.01,
    "fibre_g": 1.8,
    "folate_ug": 46.0,
    "iron_mg": 1.25,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 144.0,
    "protein_g": 5.05,
    "salt_g": 0.595,
    "sat_fat_g": 0.35,
    "sodium_mg": 238.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172089",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
