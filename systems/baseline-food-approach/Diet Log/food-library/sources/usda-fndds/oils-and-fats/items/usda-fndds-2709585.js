/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709585",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Collards, frozen, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 204.0,
    "carbs_g": 6.88,
    "energy_kcal": 55.0,
    "fat_g": 2.58,
    "fibre_g": 2.7,
    "folate_ug": 74.0,
    "iron_mg": 1.08,
    "magnesium_mg": 29.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 27.0,
    "potassium_mg": 244.0,
    "protein_g": 2.89,
    "salt_g": 0.445,
    "sat_fat_g": 1.0,
    "sodium_mg": 178.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 579.0,
    "vitamin_c_mg": 25.6,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 605.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709585",
  "state": "Frozen",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "frozen",
    "oils-and-fats",
    "other-dark-green-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
