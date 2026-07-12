/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Kale, frozen, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 5.14,
    "energy_kcal": 66.0,
    "fat_g": 3.72,
    "fibre_g": 2.2,
    "folate_ug": 63.0,
    "iron_mg": 0.82,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 140.0,
    "protein_g": 2.85,
    "salt_g": 0.34,
    "sat_fat_g": 0.819,
    "sodium_mg": 136.0,
    "sugar_g": 1.09,
    "vitamin_a_ug": 153.0,
    "vitamin_c_mg": 17.2,
    "vitamin_e_mg": 1.94,
    "vitamin_k_ug": 407.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709604",
  "state": "Frozen",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "frozen",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
