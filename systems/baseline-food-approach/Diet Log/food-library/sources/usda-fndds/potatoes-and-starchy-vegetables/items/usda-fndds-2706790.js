/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706790",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 5.38,
    "energy_kcal": 95.0,
    "fat_g": 4.56,
    "fibre_g": 0.9,
    "folate_ug": 40.0,
    "iron_mg": 0.56,
    "magnesium_mg": 15.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 73.0,
    "potassium_mg": 185.0,
    "protein_g": 8.18,
    "salt_g": 1.0325,
    "sat_fat_g": 0.77,
    "sodium_mg": 413.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 54.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706790",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
