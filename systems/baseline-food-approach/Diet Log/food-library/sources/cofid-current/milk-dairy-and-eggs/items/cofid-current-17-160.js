/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from 2g instant coffee to 225ml water with 28g whole milk",
  "id": "cofid-current-17-160",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coffee, instant, made up with water and whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.6,
    "energy_kcal": 8.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.0,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 45.0,
    "protein_g": 0.5,
    "salt_g": 0.0175,
    "sat_fat_g": 0.3,
    "sodium_mg": 7.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-160",
  "state": "Unspecified",
  "subcategory": "PAC",
  "tags": [
    "milk-dairy-and-eggs",
    "pac",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
