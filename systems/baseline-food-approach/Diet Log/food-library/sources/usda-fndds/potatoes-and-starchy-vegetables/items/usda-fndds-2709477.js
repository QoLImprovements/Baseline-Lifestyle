/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709477",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, hash brown, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 28.2,
    "energy_kcal": 217.0,
    "fat_g": 11.5,
    "fibre_g": 3.2,
    "folate_ug": 16.0,
    "iron_mg": 0.54,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 491.0,
    "protein_g": 2.62,
    "salt_g": 0.995,
    "sat_fat_g": 0.925,
    "sodium_mg": 398.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.6,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 17.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709477",
  "state": "Unspecified",
  "subcategory": "French fries and other fried white potatoes",
  "tags": [
    "french-fries-and-other-fried-white-potatoes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
