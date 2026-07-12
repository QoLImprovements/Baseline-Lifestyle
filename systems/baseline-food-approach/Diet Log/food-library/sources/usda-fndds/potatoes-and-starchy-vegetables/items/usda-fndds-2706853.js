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
  "id": "usda-fndds-2706853",
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
  "name": "Shrimp and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 5.15,
    "energy_kcal": 116.0,
    "fat_g": 6.4,
    "fibre_g": 1.2,
    "folate_ug": 24.0,
    "iron_mg": 0.46,
    "magnesium_mg": 24.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 140.0,
    "potassium_mg": 217.0,
    "protein_g": 9.16,
    "salt_g": 0.6175,
    "sat_fat_g": 0.968,
    "sodium_mg": 247.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 166.0,
    "vitamin_c_mg": 14.7,
    "vitamin_e_mg": 2.04,
    "vitamin_k_ug": 34.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706853",
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
