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
  "id": "usda-fndds-2709510",
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
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    }
  ],
  "name": "Potato patty",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 13.5,
    "energy_kcal": 171.0,
    "fat_g": 11.3,
    "fibre_g": 1.5,
    "folate_ug": 19.0,
    "iron_mg": 0.75,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 77.0,
    "potassium_mg": 219.0,
    "protein_g": 3.89,
    "salt_g": 0.5475,
    "sat_fat_g": 3.11,
    "sodium_mg": 219.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709510",
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
