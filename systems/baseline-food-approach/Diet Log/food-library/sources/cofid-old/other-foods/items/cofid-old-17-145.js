/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-old-17-145",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pretzels",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 79.2,
    "energy_kcal": 381.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.3,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 150.0,
    "protein_g": 9.1,
    "salt_g": 4.3,
    "sat_fat_g": 0.8,
    "sodium_mg": 1720.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-145",
  "state": "Unspecified",
  "subcategory": "SNC",
  "tags": [
    "other-foods",
    "snc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
