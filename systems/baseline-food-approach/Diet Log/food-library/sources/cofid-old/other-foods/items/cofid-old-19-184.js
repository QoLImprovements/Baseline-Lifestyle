/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands, chilled and frozen",
  "id": "cofid-old-19-184",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cannelloni, retail, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 13.5,
    "energy_kcal": 121.0,
    "fat_g": 5.0,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.2,
    "magnesium_mg": 20.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 90.0,
    "potassium_mg": 180.0,
    "protein_g": 6.4,
    "salt_g": 1.15,
    "sat_fat_g": 2.0,
    "sodium_mg": 460.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-184",
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
