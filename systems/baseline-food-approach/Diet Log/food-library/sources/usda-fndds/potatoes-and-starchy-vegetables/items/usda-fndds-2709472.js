/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-potato-any-size",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-potato-any-size",
      "kind": "unit",
      "label": "1 potato, any size"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato, home fries, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 18.4,
    "energy_kcal": 197.0,
    "fat_g": 13.0,
    "fibre_g": 1.6,
    "folate_ug": 16.0,
    "iron_mg": 0.64,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 399.0,
    "protein_g": 1.92,
    "salt_g": 0.85,
    "sat_fat_g": 1.75,
    "sodium_mg": 340.0,
    "sugar_g": 1.24,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 2.49,
    "vitamin_k_ug": 14.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709472",
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
