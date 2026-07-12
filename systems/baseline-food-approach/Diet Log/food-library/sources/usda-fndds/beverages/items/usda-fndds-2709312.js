/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-bar",
  "description": "Gelatins, ices, sorbets",
  "id": "usda-fndds-2709312",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Frozen fruit juice bar",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 25.4,
    "energy_kcal": 106.0,
    "fat_g": 0.06,
    "fibre_g": 0.5,
    "folate_ug": 12.0,
    "iron_mg": 0.32,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 73.0,
    "protein_g": 0.81,
    "salt_g": 0.015,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.0,
    "sugar_g": 22.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 16.8,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709312",
  "state": "Frozen",
  "subcategory": "Gelatins, ices, sorbets",
  "tags": [
    "beverages",
    "frozen",
    "gelatins-ices-sorbets"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
