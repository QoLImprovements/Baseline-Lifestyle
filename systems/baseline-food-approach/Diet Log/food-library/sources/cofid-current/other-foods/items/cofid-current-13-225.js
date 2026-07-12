/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Cichorium intybus.Stem and inner leaves",
  "id": "cofid-current-13-225",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicory, pale variety, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 2.8,
    "energy_kcal": 11.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.4,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 170.0,
    "protein_g": 0.5,
    "salt_g": 0.0025,
    "sat_fat_g": 0.2,
    "sodium_mg": 1.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-225",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
