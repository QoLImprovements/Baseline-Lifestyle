/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709905",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cauliflower, frozen, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 3.64,
    "energy_kcal": 38.0,
    "fat_g": 2.4,
    "fibre_g": 2.6,
    "folate_ug": 40.0,
    "iron_mg": 0.4,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 24.0,
    "potassium_mg": 135.0,
    "protein_g": 1.58,
    "salt_g": 0.3675,
    "sat_fat_g": 0.977,
    "sodium_mg": 147.0,
    "sugar_g": 1.03,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 30.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 12.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709905",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
