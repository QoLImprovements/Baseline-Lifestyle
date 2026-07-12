/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, including chocolate chip, Galaxy, Milky Way, Penguin and Crunchie",
  "id": "cofid-current-11-740",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake bars, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 57.5,
    "energy_kcal": 430.0,
    "fat_g": 21.6,
    "fibre_g": 1.9,
    "folate_ug": 4.0,
    "iron_mg": 1.64,
    "magnesium_mg": 34.0,
    "omega3_g": 0.29,
    "phosphorus_mg": 164.0,
    "potassium_mg": 236.0,
    "protein_g": 5.0,
    "salt_g": 0.5875,
    "sat_fat_g": 9.9,
    "sodium_mg": 235.0,
    "sugar_g": 41.5,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.93,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-740",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
