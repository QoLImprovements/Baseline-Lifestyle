/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "20 samples; savoury mix of gram flour, assorted peas, lentils, nuts and seeds",
  "id": "cofid-current-17-764",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bombay mix",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 35.1,
    "energy_kcal": 503.0,
    "fat_g": 32.9,
    "fibre_g": 8.8,
    "folate_ug": 0.0,
    "iron_mg": 3.8,
    "magnesium_mg": 100.0,
    "omega3_g": 1.55,
    "phosphorus_mg": 290.0,
    "potassium_mg": 770.0,
    "protein_g": 18.8,
    "salt_g": 1.6,
    "sat_fat_g": 3.95,
    "sodium_mg": 640.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-764",
  "state": "Unspecified",
  "subcategory": "SN",
  "tags": [
    "other-foods",
    "sn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
