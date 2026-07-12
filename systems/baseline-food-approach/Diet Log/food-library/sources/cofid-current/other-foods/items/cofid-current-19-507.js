/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands of beef and lamb. 20-23% meat, chilled/frozen/longlife",
  "id": "cofid-current-19-507",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Moussaka, retail, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 8.6,
    "energy_kcal": 140.0,
    "fat_g": 8.3,
    "fibre_g": 1.9,
    "folate_ug": 8.0,
    "iron_mg": 0.6,
    "magnesium_mg": 77.0,
    "omega3_g": 0.29,
    "phosphorus_mg": 110.0,
    "potassium_mg": 250.0,
    "protein_g": 8.3,
    "salt_g": 0.7,
    "sat_fat_g": 2.9,
    "sodium_mg": 280.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-507",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
