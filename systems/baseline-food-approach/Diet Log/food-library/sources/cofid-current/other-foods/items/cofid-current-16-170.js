/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Salted and smoked herring",
  "id": "cofid-current-16-170",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bloater, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 0.0,
    "energy_kcal": 251.0,
    "fat_g": 17.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.7,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 360.0,
    "potassium_mg": 450.0,
    "protein_g": 23.5,
    "salt_g": 1.75,
    "sat_fat_g": 4.4,
    "sodium_mg": 700.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-170",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "grilled",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
