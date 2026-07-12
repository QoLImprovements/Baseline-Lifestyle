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
  "id": "cofid-current-17-683",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fudge, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 80.8,
    "energy_kcal": 435.0,
    "fat_g": 13.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.23,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 153.0,
    "protein_g": 3.4,
    "salt_g": 0.39,
    "sat_fat_g": 8.29,
    "sodium_mg": 156.0,
    "sugar_g": 80.8,
    "vitamin_a_ug": 169.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-683",
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
