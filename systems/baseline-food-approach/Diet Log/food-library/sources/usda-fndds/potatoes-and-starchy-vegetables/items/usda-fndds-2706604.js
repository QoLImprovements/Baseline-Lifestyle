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
  "id": "usda-fndds-2706604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, potatoes, and vegetables excluding carrots, broccoli, and dark-green leafy; soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 5.8,
    "energy_kcal": 148.0,
    "fat_g": 8.81,
    "fibre_g": 1.0,
    "folate_ug": 15.0,
    "iron_mg": 1.2,
    "magnesium_mg": 18.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 96.0,
    "potassium_mg": 241.0,
    "protein_g": 11.8,
    "salt_g": 0.59,
    "sat_fat_g": 1.94,
    "sodium_mg": 236.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 9.9,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 20.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706604",
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
