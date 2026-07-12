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
  "id": "usda-fndds-2709454",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, scalloped, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 182.0,
    "carbs_g": 13.3,
    "energy_kcal": 178.0,
    "fat_g": 11.0,
    "fibre_g": 0.7,
    "folate_ug": 10.0,
    "iron_mg": 0.32,
    "magnesium_mg": 21.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 147.0,
    "potassium_mg": 239.0,
    "protein_g": 6.8,
    "salt_g": 1.0,
    "sat_fat_g": 5.73,
    "sodium_mg": 400.0,
    "sugar_g": 2.18,
    "vitamin_a_ug": 115.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709454",
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
