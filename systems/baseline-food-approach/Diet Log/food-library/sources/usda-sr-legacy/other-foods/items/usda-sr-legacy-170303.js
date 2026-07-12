/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "serving-4-pieces",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170303",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 201.0,
      "key": "serving-4-pieces",
      "kind": "unit",
      "label": "serving 4 pieces"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "strip",
      "kind": "unit",
      "label": "strip"
    }
  ],
  "name": "CHICK-FIL-A, Chick-n-Strips",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 10.4,
    "energy_kcal": 954.0,
    "fat_g": 11.2,
    "fibre_g": 0.9,
    "folate_ug": 40.0,
    "iron_mg": 0.97,
    "magnesium_mg": 30.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 264.0,
    "potassium_mg": 497.0,
    "protein_g": 21.4,
    "salt_g": 1.4425,
    "sat_fat_g": 2.06,
    "sodium_mg": 577.0,
    "sugar_g": 1.24,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170303",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
