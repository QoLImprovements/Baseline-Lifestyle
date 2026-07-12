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
  "id": "cofid-current-19-576",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Devilled kidneys, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 1.4,
    "energy_kcal": 129.0,
    "fat_g": 7.7,
    "fibre_g": 0.3,
    "folate_ug": 9.0,
    "iron_mg": 4.5,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 239.0,
    "potassium_mg": 338.0,
    "protein_g": 13.7,
    "salt_g": 0.4725,
    "sat_fat_g": 3.09,
    "sodium_mg": 189.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 140.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-576",
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
