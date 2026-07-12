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
  "id": "usda-fndds-2709466",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-fry-any-cut",
      "kind": "unit",
      "label": "1 fry, any cut"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, french fries, with cheese, school",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 17.7,
    "energy_kcal": 181.0,
    "fat_g": 10.3,
    "fibre_g": 1.5,
    "folate_ug": 17.0,
    "iron_mg": 0.61,
    "magnesium_mg": 24.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 101.0,
    "potassium_mg": 384.0,
    "protein_g": 4.55,
    "salt_g": 0.4875,
    "sat_fat_g": 2.37,
    "sodium_mg": 195.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709466",
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
