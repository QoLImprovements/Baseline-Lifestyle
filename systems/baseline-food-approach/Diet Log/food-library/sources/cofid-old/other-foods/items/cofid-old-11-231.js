/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 assorted samples, fudge-type sweet",
  "id": "cofid-old-11-231",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burfi",
  "nutritionPerBasis": {
    "calcium_mg": 340.0,
    "carbs_g": 17.7,
    "energy_kcal": 292.0,
    "fat_g": 19.9,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.9,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 490.0,
    "protein_g": 11.6,
    "salt_g": 0.525,
    "sat_fat_g": 0.0,
    "sodium_mg": 210.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 200.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-231",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
