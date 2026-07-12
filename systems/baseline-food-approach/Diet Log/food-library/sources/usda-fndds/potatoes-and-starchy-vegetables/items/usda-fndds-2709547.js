/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mashed potatoes and white potato mixtures",
  "id": "usda-fndds-2709547",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato salad, made with creamy dressing",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 16.8,
    "energy_kcal": 140.0,
    "fat_g": 7.53,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.3,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 63.0,
    "potassium_mg": 278.0,
    "protein_g": 1.59,
    "salt_g": 0.4925,
    "sat_fat_g": 1.19,
    "sodium_mg": 197.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 25.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709547",
  "state": "Unspecified",
  "subcategory": "Mashed potatoes and white potato mixtures",
  "tags": [
    "mashed-potatoes-and-white-potato-mixtures",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
