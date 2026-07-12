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
  "id": "cofid-current-17-786",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coconut ice, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 67.1,
    "energy_kcal": 369.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.82,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 162.0,
    "protein_g": 1.8,
    "salt_g": 0.0425,
    "sat_fat_g": 10.54,
    "sodium_mg": 17.0,
    "sugar_g": 67.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-786",
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
