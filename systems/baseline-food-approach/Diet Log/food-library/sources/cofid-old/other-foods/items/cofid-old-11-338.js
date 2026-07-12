/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "3 assorted samples with bean and vegetable paste filling",
  "id": "cofid-old-11-338",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastries, Chinese, flaky",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 59.3,
    "energy_kcal": 392.0,
    "fat_g": 16.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.9,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 110.0,
    "protein_g": 5.4,
    "salt_g": 0.1925,
    "sat_fat_g": 0.0,
    "sodium_mg": 77.0,
    "sugar_g": 30.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-338",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
