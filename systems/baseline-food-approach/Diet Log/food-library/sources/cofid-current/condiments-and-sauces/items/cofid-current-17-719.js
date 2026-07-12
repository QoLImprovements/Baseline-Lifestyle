/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "8 samples; assorted types, including garlic chilli sauce",
  "id": "cofid-current-17-719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chilli sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 7.3,
    "energy_kcal": 40.0,
    "fat_g": 0.8,
    "fibre_g": 2.2,
    "folate_ug": 10.0,
    "iron_mg": 2.8,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 140.0,
    "protein_g": 1.3,
    "salt_g": 3.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 1250.0,
    "sugar_g": 6.9,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-719",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
