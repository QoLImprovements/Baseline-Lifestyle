/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-fl-oz",
  "description": "Gelatins, ices, sorbets",
  "id": "usda-fndds-2710322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-freezer-pop",
      "kind": "unit",
      "label": "1 freezer pop"
    }
  ],
  "name": "Freezer pop",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 19.2,
    "energy_kcal": 79.0,
    "fat_g": 0.24,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.54,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 15.0,
    "protein_g": 0.0,
    "salt_g": 0.0175,
    "sat_fat_g": 0.013,
    "sodium_mg": 7.0,
    "sugar_g": 13.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710322",
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
