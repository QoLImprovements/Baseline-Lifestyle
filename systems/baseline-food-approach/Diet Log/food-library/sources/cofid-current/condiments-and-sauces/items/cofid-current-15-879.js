/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Onion base for curry. Recipe from review of recipe collection",
  "id": "cofid-current-15-879",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, curry, onion, with butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 6.6,
    "energy_kcal": 252.0,
    "fat_g": 24.7,
    "fibre_g": 1.6,
    "folate_ug": 6.0,
    "iron_mg": 1.41,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 152.0,
    "protein_g": 1.2,
    "salt_g": 0.57,
    "sat_fat_g": 15.49,
    "sodium_mg": 228.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 318.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 2.2
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-879",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "condiments-and-sauces",
    "dr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
