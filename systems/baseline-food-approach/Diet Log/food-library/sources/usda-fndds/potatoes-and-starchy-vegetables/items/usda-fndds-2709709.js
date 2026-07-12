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
  "id": "usda-fndds-2709709",
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
      "gramsPerUnit": 5.0,
      "key": "1-fry-any-cut",
      "kind": "unit",
      "label": "1 fry, any cut"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sweet potato fries, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 37.4,
    "energy_kcal": 192.0,
    "fat_g": 9.39,
    "fibre_g": 6.0,
    "folate_ug": 32.0,
    "iron_mg": 0.81,
    "magnesium_mg": 27.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 62.0,
    "potassium_mg": 431.0,
    "protein_g": 2.27,
    "salt_g": 0.385,
    "sat_fat_g": 1.22,
    "sodium_mg": 154.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 457.0,
    "vitamin_c_mg": 7.5,
    "vitamin_e_mg": 1.57,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709709",
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
