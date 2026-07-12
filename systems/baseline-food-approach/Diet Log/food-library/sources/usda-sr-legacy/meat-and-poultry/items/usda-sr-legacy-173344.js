/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173344",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pulled pork in barbecue sauce",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 18.7,
    "energy_kcal": 701.0,
    "fat_g": 4.42,
    "fibre_g": 1.2,
    "folate_ug": 2.0,
    "iron_mg": 1.24,
    "magnesium_mg": 22.0,
    "omega3_g": 0.037,
    "phosphorus_mg": 161.0,
    "potassium_mg": 305.0,
    "protein_g": 13.2,
    "salt_g": 1.665,
    "sat_fat_g": 1.42,
    "sodium_mg": 666.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173344",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
