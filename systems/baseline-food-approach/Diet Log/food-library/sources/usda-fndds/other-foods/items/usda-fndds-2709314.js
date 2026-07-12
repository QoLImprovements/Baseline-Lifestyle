/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-bar",
  "description": "Gelatins, ices, sorbets",
  "id": "usda-fndds-2709314",
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
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sorbet",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 27.1,
    "energy_kcal": 110.0,
    "fat_g": 0.05,
    "fibre_g": 0.5,
    "folate_ug": 3.0,
    "iron_mg": 0.17,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 28.0,
    "protein_g": 0.79,
    "salt_g": 0.0325,
    "sat_fat_g": 0.0,
    "sodium_mg": 13.0,
    "sugar_g": 25.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709314",
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
