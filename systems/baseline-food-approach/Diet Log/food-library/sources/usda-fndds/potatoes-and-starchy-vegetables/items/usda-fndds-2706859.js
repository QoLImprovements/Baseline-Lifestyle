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
  "id": "usda-fndds-2706859",
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
  "name": "Shellfish mixture and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 5.89,
    "energy_kcal": 120.0,
    "fat_g": 6.38,
    "fibre_g": 1.2,
    "folate_ug": 21.0,
    "iron_mg": 0.86,
    "magnesium_mg": 23.0,
    "omega3_g": 0.093,
    "phosphorus_mg": 144.0,
    "potassium_mg": 295.0,
    "protein_g": 9.41,
    "salt_g": 0.6175,
    "sat_fat_g": 0.932,
    "sodium_mg": 247.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 176.0,
    "vitamin_c_mg": 14.7,
    "vitamin_e_mg": 1.86,
    "vitamin_k_ug": 34.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706859",
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
