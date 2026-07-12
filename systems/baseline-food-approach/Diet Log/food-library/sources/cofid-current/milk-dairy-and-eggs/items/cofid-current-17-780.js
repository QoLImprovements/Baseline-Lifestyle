/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese sauce, packet mix, made up with skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 171.0,
    "carbs_g": 9.2,
    "energy_kcal": 79.0,
    "fat_g": 2.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.11,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 176.0,
    "potassium_mg": 196.0,
    "protein_g": 5.6,
    "salt_g": 1.13,
    "sat_fat_g": 0.0,
    "sodium_mg": 452.0,
    "sugar_g": 5.3,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-780",
  "state": "Unspecified",
  "subcategory": "WCD",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wcd"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
