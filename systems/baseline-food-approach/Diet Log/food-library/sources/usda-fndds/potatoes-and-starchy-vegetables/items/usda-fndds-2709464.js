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
  "id": "usda-fndds-2709464",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
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
  "name": "Potato, french fries, school",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 19.3,
    "energy_kcal": 166.0,
    "fat_g": 9.16,
    "fibre_g": 1.7,
    "folate_ug": 17.0,
    "iron_mg": 0.66,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 419.0,
    "protein_g": 2.02,
    "salt_g": 0.3675,
    "sat_fat_g": 1.24,
    "sodium_mg": 147.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 1.76,
    "vitamin_k_ug": 10.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709464",
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
