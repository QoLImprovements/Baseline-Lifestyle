/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, pasta with sauce including cheese, meat and vegetables",
  "id": "cofid-current-11-734",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta and sauce mixes, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 70.0,
    "energy_kcal": 358.0,
    "fat_g": 4.9,
    "fibre_g": 4.5,
    "folate_ug": 42.0,
    "iron_mg": 1.73,
    "magnesium_mg": 52.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 344.0,
    "potassium_mg": 409.0,
    "protein_g": 12.8,
    "salt_g": 2.9125,
    "sat_fat_g": 2.25,
    "sodium_mg": 1165.0,
    "sugar_g": 8.1,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-734",
  "state": "Dried",
  "subcategory": "AD",
  "tags": [
    "ad",
    "condiments-and-sauces",
    "dried"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
