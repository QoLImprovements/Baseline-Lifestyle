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
  "id": "cofid-current-50-1173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomato sauce, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 8.6,
    "energy_kcal": 89.0,
    "fat_g": 5.5,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.6,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 280.0,
    "protein_g": 2.2,
    "salt_g": 0.85,
    "sat_fat_g": 1.8,
    "sodium_mg": 340.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 204.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "50-1173",
  "state": "Unspecified",
  "subcategory": "WCN",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wcn"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
