/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-769",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Barbecue sauce, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 26.1,
    "energy_kcal": 300.0,
    "fat_g": 21.0,
    "fibre_g": 1.7,
    "folate_ug": 5.0,
    "iron_mg": 2.28,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 277.0,
    "protein_g": 2.7,
    "salt_g": 0.98,
    "sat_fat_g": 12.45,
    "sodium_mg": 392.0,
    "sugar_g": 21.5,
    "vitamin_a_ug": 260.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-769",
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
