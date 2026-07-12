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
  "id": "cofid-current-11-959",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes, savoury, made with semi-skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 26.6,
    "energy_kcal": 203.0,
    "fat_g": 8.4,
    "fibre_g": 1.1,
    "folate_ug": 10.0,
    "iron_mg": 0.79,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 190.0,
    "protein_g": 6.9,
    "salt_g": 0.1325,
    "sat_fat_g": 1.95,
    "sodium_mg": 53.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-959",
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
