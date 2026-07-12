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
  "id": "cofid-current-11-1101",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakoras, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 19.7,
    "energy_kcal": 173.0,
    "fat_g": 8.1,
    "fibre_g": 0.0,
    "folate_ug": 41.0,
    "iron_mg": 1.5,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 348.0,
    "protein_g": 8.1,
    "salt_g": 0.1575,
    "sat_fat_g": 0.66,
    "sodium_mg": 63.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 124.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 2.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1101",
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
