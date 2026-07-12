/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fried vegetables",
  "id": "usda-fndds-2709713",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-fry-any-cut",
      "kind": "unit",
      "label": "1 fry, any cut"
    }
  ],
  "name": "Sweet potato fries, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 31.6,
    "energy_kcal": 305.0,
    "fat_g": 23.9,
    "fibre_g": 5.1,
    "folate_ug": 27.0,
    "iron_mg": 0.69,
    "magnesium_mg": 23.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 52.0,
    "potassium_mg": 364.0,
    "protein_g": 1.92,
    "salt_g": 0.6675,
    "sat_fat_g": 6.26,
    "sodium_mg": 267.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 386.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 3.0,
    "vitamin_k_ug": 29.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709713",
  "state": "Unspecified",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried-vegetables",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
