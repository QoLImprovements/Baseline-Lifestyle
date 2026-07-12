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
  "id": "cofid-current-17-835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Scotch broth, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 4.0,
    "energy_kcal": 74.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.69,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 168.0,
    "protein_g": 6.8,
    "salt_g": 0.055,
    "sat_fat_g": 1.6,
    "sodium_mg": 22.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-835",
  "state": "Unspecified",
  "subcategory": "WAA",
  "tags": [
    "soups",
    "unspecified",
    "waa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
