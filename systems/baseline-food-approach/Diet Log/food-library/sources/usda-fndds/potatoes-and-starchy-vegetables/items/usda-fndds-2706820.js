/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 3.88,
    "energy_kcal": 119.0,
    "fat_g": 7.24,
    "fibre_g": 0.9,
    "folate_ug": 15.0,
    "iron_mg": 0.43,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 155.0,
    "protein_g": 9.83,
    "salt_g": 0.8825,
    "sat_fat_g": 3.49,
    "sodium_mg": 353.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 152.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 13.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706820",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
