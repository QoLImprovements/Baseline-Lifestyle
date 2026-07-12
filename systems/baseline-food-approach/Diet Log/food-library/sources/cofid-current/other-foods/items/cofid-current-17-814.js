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
  "id": "cofid-current-17-814",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nougat, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 80.0,
    "energy_kcal": 413.0,
    "fat_g": 10.2,
    "fibre_g": 1.1,
    "folate_ug": 0.0,
    "iron_mg": 0.96,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 249.0,
    "protein_g": 5.2,
    "salt_g": 0.2875,
    "sat_fat_g": 1.61,
    "sodium_mg": 115.0,
    "sugar_g": 79.6,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-814",
  "state": "Unspecified",
  "subcategory": "SEC",
  "tags": [
    "other-foods",
    "sec",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
