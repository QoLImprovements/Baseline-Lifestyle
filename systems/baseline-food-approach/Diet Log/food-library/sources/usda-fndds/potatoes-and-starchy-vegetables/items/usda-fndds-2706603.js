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
  "id": "usda-fndds-2706603",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 5.96,
    "energy_kcal": 149.0,
    "fat_g": 8.82,
    "fibre_g": 1.1,
    "folate_ug": 17.0,
    "iron_mg": 1.21,
    "magnesium_mg": 18.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 96.0,
    "potassium_mg": 240.0,
    "protein_g": 11.8,
    "salt_g": 0.615,
    "sat_fat_g": 1.95,
    "sodium_mg": 246.0,
    "sugar_g": 1.34,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 10.9,
    "vitamin_e_mg": 1.37,
    "vitamin_k_ug": 28.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706603",
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
