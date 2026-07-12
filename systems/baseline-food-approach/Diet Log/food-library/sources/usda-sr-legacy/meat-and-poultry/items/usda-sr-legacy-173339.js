/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "bowl",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173339",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "bowl",
      "kind": "unit",
      "label": "bowl"
    }
  ],
  "name": "Rice bowl with chicken, frozen entree, prepared (includes fried, teriyaki, and sweet and sour varieties)",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 22.5,
    "energy_kcal": 529.0,
    "fat_g": 1.56,
    "fibre_g": 0.7,
    "folate_ug": 18.0,
    "iron_mg": 0.35,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 123.0,
    "protein_g": 5.65,
    "salt_g": 0.8325,
    "sat_fat_g": 0.327,
    "sodium_mg": 333.0,
    "sugar_g": 4.07,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173339",
  "state": "Fried",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "fried",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
