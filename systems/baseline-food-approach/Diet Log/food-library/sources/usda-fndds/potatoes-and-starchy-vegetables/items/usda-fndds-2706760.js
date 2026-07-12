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
  "id": "usda-fndds-2706760",
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
  "name": "Pork, tofu, and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, soy-base sauce",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 4.75,
    "energy_kcal": 116.0,
    "fat_g": 7.77,
    "fibre_g": 1.2,
    "folate_ug": 25.0,
    "iron_mg": 0.76,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 232.0,
    "protein_g": 7.0,
    "salt_g": 0.595,
    "sat_fat_g": 1.38,
    "sodium_mg": 238.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 14.4,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 33.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706760",
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
