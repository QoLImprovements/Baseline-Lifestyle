/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-479",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stew, Irish, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 9.4,
    "energy_kcal": 119.0,
    "fat_g": 6.2,
    "fibre_g": 1.5,
    "folate_ug": 4.0,
    "iron_mg": 0.69,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 306.0,
    "protein_g": 7.3,
    "salt_g": 0.2875,
    "sat_fat_g": 2.89,
    "sodium_mg": 115.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 274.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-479",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "soups",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
