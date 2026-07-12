/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1086",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tarts, jam, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 59.6,
    "energy_kcal": 366.0,
    "fat_g": 14.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.91,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 143.0,
    "protein_g": 4.2,
    "salt_g": 0.335,
    "sat_fat_g": 8.54,
    "sodium_mg": 134.0,
    "sugar_g": 37.4,
    "vitamin_a_ug": 172.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 1.68
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1086",
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
