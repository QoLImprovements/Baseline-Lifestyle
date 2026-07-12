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
  "id": "usda-fndds-2709474",
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
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, home fries, from fresh",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 18.8,
    "energy_kcal": 185.0,
    "fat_g": 11.5,
    "fibre_g": 1.6,
    "folate_ug": 16.0,
    "iron_mg": 0.65,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 407.0,
    "protein_g": 1.96,
    "salt_g": 0.6975,
    "sat_fat_g": 1.55,
    "sodium_mg": 279.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.8,
    "vitamin_e_mg": 2.2,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709474",
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
