/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-594",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coffee, Irish",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 2.7,
    "energy_kcal": 125.0,
    "fat_g": 8.8,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.11,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 74.0,
    "protein_g": 0.4,
    "salt_g": 0.01,
    "sat_fat_g": 5.44,
    "sodium_mg": 4.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 140.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-594",
  "state": "Unspecified",
  "subcategory": "PAC",
  "tags": [
    "beverages",
    "pac",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
