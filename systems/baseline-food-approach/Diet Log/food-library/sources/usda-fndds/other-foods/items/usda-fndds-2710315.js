/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-oz",
  "description": "Gelatins, ices, sorbets",
  "id": "usda-fndds-2710315",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Yokan",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 30.6,
    "energy_kcal": 133.0,
    "fat_g": 0.24,
    "fibre_g": 2.0,
    "folate_ug": 10.0,
    "iron_mg": 0.59,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 120.0,
    "protein_g": 2.4,
    "salt_g": 0.2975,
    "sat_fat_g": 0.057,
    "sodium_mg": 119.0,
    "sugar_g": 24.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710315",
  "state": "Unspecified",
  "subcategory": "Gelatins, ices, sorbets",
  "tags": [
    "gelatins-ices-sorbets",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
