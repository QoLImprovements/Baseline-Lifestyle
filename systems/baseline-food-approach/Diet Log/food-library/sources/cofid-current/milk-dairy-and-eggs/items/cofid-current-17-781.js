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
  "id": "cofid-current-17-781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese sauce, packet mix, made up with whole milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 9.0,
    "energy_kcal": 108.0,
    "fat_g": 5.7,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.11,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 176.0,
    "potassium_mg": 192.0,
    "protein_g": 5.5,
    "salt_g": 1.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 450.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.59
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-781",
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
