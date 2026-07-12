/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-piece",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709879",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Breadfruit, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 26.3,
    "energy_kcal": 123.0,
    "fat_g": 2.77,
    "fibre_g": 4.7,
    "folate_ug": 12.0,
    "iron_mg": 0.53,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 475.0,
    "protein_g": 1.04,
    "salt_g": 0.3075,
    "sat_fat_g": 0.713,
    "sodium_mg": 123.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 23.9,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709879",
  "state": "Cooked",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "cooked",
    "other-starchy-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
