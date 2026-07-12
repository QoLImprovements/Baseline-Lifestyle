/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709695",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Winter squash, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 8.57,
    "energy_kcal": 59.0,
    "fat_g": 2.88,
    "fibre_g": 2.7,
    "folate_ug": 19.0,
    "iron_mg": 0.43,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 234.0,
    "protein_g": 0.87,
    "salt_g": 0.305,
    "sat_fat_g": 0.736,
    "sodium_mg": 122.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 264.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709695",
  "state": "Cooked",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "cooked",
    "fruit",
    "other-red-and-orange-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
