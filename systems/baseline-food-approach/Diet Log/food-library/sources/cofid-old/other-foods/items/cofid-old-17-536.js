/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Manufacturer's data. Average of Florida style and California style",
  "id": "cofid-old-17-536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sunny Delight",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 10.0,
    "energy_kcal": 39.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 25.0,
    "protein_g": 0.0,
    "salt_g": 0.095,
    "sat_fat_g": 0.0,
    "sodium_mg": 38.0,
    "sugar_g": 9.4,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-536",
  "state": "Unspecified",
  "subcategory": "PCC",
  "tags": [
    "other-foods",
    "pcc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
