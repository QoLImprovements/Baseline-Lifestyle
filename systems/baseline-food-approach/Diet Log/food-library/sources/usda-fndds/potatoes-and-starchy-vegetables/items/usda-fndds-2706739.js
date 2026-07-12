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
  "id": "usda-fndds-2706739",
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
  "name": "Beef, tofu, and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 4.75,
    "energy_kcal": 115.0,
    "fat_g": 7.68,
    "fibre_g": 1.2,
    "folate_ug": 27.0,
    "iron_mg": 0.97,
    "magnesium_mg": 19.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 78.0,
    "potassium_mg": 207.0,
    "protein_g": 7.3,
    "salt_g": 0.5875,
    "sat_fat_g": 1.37,
    "sodium_mg": 235.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 14.3,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 33.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706739",
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
