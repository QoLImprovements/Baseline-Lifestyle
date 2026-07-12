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
  "id": "usda-fndds-2706744",
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
  "name": "Beef and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 4.34,
    "energy_kcal": 147.0,
    "fat_g": 9.15,
    "fibre_g": 1.0,
    "folate_ug": 16.0,
    "iron_mg": 1.25,
    "magnesium_mg": 17.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 97.0,
    "potassium_mg": 229.0,
    "protein_g": 12.1,
    "salt_g": 0.6125,
    "sat_fat_g": 2.02,
    "sodium_mg": 245.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 22.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706744",
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
