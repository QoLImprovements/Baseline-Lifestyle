/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-floweret",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709903",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cauliflower, fresh, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 5.02,
    "energy_kcal": 46.0,
    "fat_g": 2.56,
    "fibre_g": 2.0,
    "folate_ug": 49.0,
    "iron_mg": 0.42,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 45.0,
    "potassium_mg": 302.0,
    "protein_g": 1.95,
    "salt_g": 0.4125,
    "sat_fat_g": 1.11,
    "sodium_mg": 165.0,
    "sugar_g": 1.94,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 41.3,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 17.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709903",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
