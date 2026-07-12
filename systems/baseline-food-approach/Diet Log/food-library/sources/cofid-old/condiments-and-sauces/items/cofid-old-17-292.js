/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "9 bottles, 3 brands",
  "id": "cofid-old-17-292",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Brown sauce",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 27.9,
    "energy_kcal": 120.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.2,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 330.0,
    "protein_g": 1.2,
    "salt_g": 3.75,
    "sat_fat_g": 0.0,
    "sodium_mg": 1500.0,
    "sugar_g": 24.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-292",
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
