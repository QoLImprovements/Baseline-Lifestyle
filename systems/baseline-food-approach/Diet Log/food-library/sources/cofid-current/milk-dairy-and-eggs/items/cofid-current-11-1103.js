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
  "id": "cofid-current-11-1103",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes, savoury, wholemeal, made with whole milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 23.4,
    "energy_kcal": 209.0,
    "fat_g": 10.1,
    "fibre_g": 2.9,
    "folate_ug": 13.0,
    "iron_mg": 0.94,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 243.0,
    "protein_g": 7.6,
    "salt_g": 0.1325,
    "sat_fat_g": 2.87,
    "sodium_mg": 53.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.14,
    "vitamin_k_ug": 0.82
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1103",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
