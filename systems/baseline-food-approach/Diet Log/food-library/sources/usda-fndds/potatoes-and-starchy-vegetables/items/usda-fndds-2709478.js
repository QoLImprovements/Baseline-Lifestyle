/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-patty",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709478",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato, hash brown, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 28.9,
    "energy_kcal": 272.0,
    "fat_g": 17.0,
    "fibre_g": 2.7,
    "folate_ug": 12.0,
    "iron_mg": 0.6,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 355.0,
    "protein_g": 2.58,
    "salt_g": 1.415,
    "sat_fat_g": 2.54,
    "sodium_mg": 566.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 2.62,
    "vitamin_k_ug": 9.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709478",
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
