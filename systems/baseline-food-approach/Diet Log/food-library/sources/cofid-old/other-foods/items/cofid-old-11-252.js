/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Asian sweet, 5 samples, assorted colours and flavours",
  "id": "cofid-old-11-252",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Halwa",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 68.0,
    "energy_kcal": 381.0,
    "fat_g": 13.2,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 2.1,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 67.0,
    "protein_g": 1.8,
    "salt_g": 0.0675,
    "sat_fat_g": 0.0,
    "sodium_mg": 27.0,
    "sugar_g": 59.0,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-252",
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
