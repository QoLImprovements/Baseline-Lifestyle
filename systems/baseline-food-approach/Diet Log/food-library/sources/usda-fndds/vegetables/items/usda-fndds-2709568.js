/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709568",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    }
  ],
  "name": "Fufu",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 33.6,
    "energy_kcal": 166.0,
    "fat_g": 2.99,
    "fibre_g": 3.1,
    "folate_ug": 22.0,
    "iron_mg": 0.43,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 449.0,
    "protein_g": 1.5,
    "salt_g": 0.3575,
    "sat_fat_g": 0.776,
    "sodium_mg": 143.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 11.1,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709568",
  "state": "Unspecified",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "other-starchy-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
