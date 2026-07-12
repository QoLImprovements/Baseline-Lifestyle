/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709611",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
  "name": "Mustard greens, frozen, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 3.02,
    "energy_kcal": 41.0,
    "fat_g": 2.79,
    "fibre_g": 2.7,
    "folate_ug": 68.0,
    "iron_mg": 1.09,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 135.0,
    "protein_g": 2.21,
    "salt_g": 0.3625,
    "sat_fat_g": 0.679,
    "sodium_mg": 145.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 354.0,
    "vitamin_c_mg": 13.4,
    "vitamin_e_mg": 1.69,
    "vitamin_k_ug": 326.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709611",
  "state": "Frozen",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "condiments-and-sauces",
    "frozen",
    "other-dark-green-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
