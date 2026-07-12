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
  "id": "cofid-current-19-573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cornish pasty, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 27.8,
    "energy_kcal": 287.0,
    "fat_g": 19.2,
    "fibre_g": 2.5,
    "folate_ug": 9.0,
    "iron_mg": 0.85,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 217.0,
    "protein_g": 6.7,
    "salt_g": 0.3275,
    "sat_fat_g": 7.07,
    "sodium_mg": 131.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-573",
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
