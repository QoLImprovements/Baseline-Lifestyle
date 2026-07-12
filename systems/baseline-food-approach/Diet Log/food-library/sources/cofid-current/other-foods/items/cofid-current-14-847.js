/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources and calculation from 14-844",
  "id": "cofid-current-14-847",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tahini paste",
  "nutritionPerBasis": {
    "calcium_mg": 680.0,
    "carbs_g": 0.9,
    "energy_kcal": 607.0,
    "fat_g": 58.9,
    "fibre_g": 0.0,
    "folate_ug": 99.0,
    "iron_mg": 10.6,
    "magnesium_mg": 380.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 730.0,
    "potassium_mg": 580.0,
    "protein_g": 18.5,
    "salt_g": 0.05,
    "sat_fat_g": 8.4,
    "sodium_mg": 20.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-847",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
