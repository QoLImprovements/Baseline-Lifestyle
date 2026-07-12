/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analysis and manufacturers' data",
  "id": "cofid-old-17-072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Jam, no added sugar",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 60.4,
    "energy_kcal": 174.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.2,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 55.0,
    "protein_g": 0.1,
    "salt_g": 0.095,
    "sat_fat_g": 0.0,
    "sodium_mg": 38.0,
    "sugar_g": 7.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-072",
  "state": "Unspecified",
  "subcategory": "SC",
  "tags": [
    "other-foods",
    "sc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
