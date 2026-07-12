/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-piece",
  "description": "Broccoli",
  "id": "usda-fndds-2709648",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    }
  ],
  "name": "Broccoli, fresh, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 6.33,
    "energy_kcal": 63.0,
    "fat_g": 3.0,
    "fibre_g": 2.4,
    "folate_ug": 56.0,
    "iron_mg": 0.7,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 306.0,
    "protein_g": 2.6,
    "salt_g": 0.405,
    "sat_fat_g": 0.733,
    "sodium_mg": 162.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 78.3,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 105.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709648",
  "state": "Cooked",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "cooked",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
