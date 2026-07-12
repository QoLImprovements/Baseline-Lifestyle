/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 2 brands",
  "id": "cofid-current-12-545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cocoa powder",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 11.5,
    "energy_kcal": 312.0,
    "fat_g": 21.7,
    "fibre_g": 0.0,
    "folate_ug": 38.0,
    "iron_mg": 10.5,
    "magnesium_mg": 520.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 660.0,
    "potassium_mg": 1500.0,
    "protein_g": 18.5,
    "salt_g": 0.0,
    "sat_fat_g": 12.8,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 1.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-545",
  "state": "Unspecified",
  "subcategory": "BH",
  "tags": [
    "bh",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
