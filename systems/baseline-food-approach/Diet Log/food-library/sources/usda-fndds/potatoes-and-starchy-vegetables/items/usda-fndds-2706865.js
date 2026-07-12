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
  "id": "usda-fndds-2706865",
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
  "name": "Fish and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 4.64,
    "energy_kcal": 104.0,
    "fat_g": 5.99,
    "fibre_g": 1.2,
    "folate_ug": 19.0,
    "iron_mg": 0.42,
    "magnesium_mg": 19.0,
    "omega3_g": 0.068,
    "phosphorus_mg": 153.0,
    "potassium_mg": 258.0,
    "protein_g": 7.79,
    "salt_g": 0.6375,
    "sat_fat_g": 0.827,
    "sodium_mg": 255.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 136.0,
    "vitamin_c_mg": 14.7,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 34.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706865",
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
