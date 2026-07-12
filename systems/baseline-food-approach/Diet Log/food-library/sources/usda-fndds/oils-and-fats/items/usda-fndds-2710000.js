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
  "id": "usda-fndds-2710000",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Summer squash, yellow or green, frozen, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 4.42,
    "energy_kcal": 40.0,
    "fat_g": 2.35,
    "fibre_g": 1.3,
    "folate_ug": 10.0,
    "iron_mg": 0.48,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 32.0,
    "potassium_mg": 217.0,
    "protein_g": 1.19,
    "salt_g": 0.3325,
    "sat_fat_g": 0.976,
    "sodium_mg": 133.0,
    "sugar_g": 1.96,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710000",
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
