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
  "id": "usda-fndds-2709581",
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
  "name": "Collards, frozen, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 204.0,
    "carbs_g": 6.88,
    "energy_kcal": 58.0,
    "fat_g": 2.94,
    "fibre_g": 2.7,
    "folate_ug": 74.0,
    "iron_mg": 1.09,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 243.0,
    "protein_g": 2.88,
    "salt_g": 0.4225,
    "sat_fat_g": 0.724,
    "sodium_mg": 169.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 568.0,
    "vitamin_c_mg": 25.6,
    "vitamin_e_mg": 1.59,
    "vitamin_k_ug": 605.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709581",
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
