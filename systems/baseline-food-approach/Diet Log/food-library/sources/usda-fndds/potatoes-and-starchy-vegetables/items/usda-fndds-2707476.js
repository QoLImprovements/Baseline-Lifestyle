/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2707476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tofu and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 4.68,
    "energy_kcal": 92.0,
    "fat_g": 6.71,
    "fibre_g": 1.2,
    "folate_ug": 33.0,
    "iron_mg": 0.79,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 184.0,
    "protein_g": 4.11,
    "salt_g": 0.54,
    "sat_fat_g": 0.923,
    "sodium_mg": 216.0,
    "sugar_g": 1.64,
    "vitamin_a_ug": 122.0,
    "vitamin_c_mg": 13.4,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 31.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707476",
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
