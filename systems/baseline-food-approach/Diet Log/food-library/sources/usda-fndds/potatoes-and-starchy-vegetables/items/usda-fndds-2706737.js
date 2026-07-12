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
  "id": "usda-fndds-2706737",
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
  "name": "Beef and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 4.65,
    "energy_kcal": 144.0,
    "fat_g": 8.81,
    "fibre_g": 1.2,
    "folate_ug": 20.0,
    "iron_mg": 1.23,
    "magnesium_mg": 17.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 97.0,
    "potassium_mg": 234.0,
    "protein_g": 11.7,
    "salt_g": 0.6225,
    "sat_fat_g": 1.94,
    "sodium_mg": 249.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 135.0,
    "vitamin_c_mg": 14.8,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 34.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706737",
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
