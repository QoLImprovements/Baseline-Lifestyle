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
  "id": "usda-fndds-2706854",
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
  "name": "Shrimp and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 4.86,
    "energy_kcal": 118.0,
    "fat_g": 6.64,
    "fibre_g": 1.0,
    "folate_ug": 21.0,
    "iron_mg": 0.45,
    "magnesium_mg": 24.0,
    "omega3_g": 0.114,
    "phosphorus_mg": 142.0,
    "potassium_mg": 211.0,
    "protein_g": 9.47,
    "salt_g": 0.605,
    "sat_fat_g": 1.01,
    "sodium_mg": 242.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 2.04,
    "vitamin_k_ug": 21.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706854",
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
