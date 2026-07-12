/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-half-circle",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-half-circle",
      "kind": "unit",
      "label": "1 half circle"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-triangular-piece",
      "kind": "unit",
      "label": "1 triangular piece"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-full-circle",
      "kind": "unit",
      "label": "1 full circle"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Quesadilla, beef or pork, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 28.2,
    "energy_kcal": 279.0,
    "fat_g": 13.2,
    "fibre_g": 2.1,
    "folate_ug": 58.0,
    "iron_mg": 2.32,
    "magnesium_mg": 20.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 208.0,
    "potassium_mg": 142.0,
    "protein_g": 11.1,
    "salt_g": 1.48,
    "sat_fat_g": 5.32,
    "sodium_mg": 592.0,
    "sugar_g": 2.63,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 8.9,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708595",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "meat-and-poultry",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
