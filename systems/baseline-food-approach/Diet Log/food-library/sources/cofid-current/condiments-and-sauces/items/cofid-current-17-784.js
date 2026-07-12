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
  "id": "cofid-current-17-784",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chutney, apple, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 49.2,
    "energy_kcal": 190.0,
    "fat_g": 0.2,
    "fibre_g": 0.7,
    "folate_ug": 3.0,
    "iron_mg": 0.75,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 179.0,
    "protein_g": 0.8,
    "salt_g": 0.0275,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.0,
    "sugar_g": 48.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-784",
  "state": "Unspecified",
  "subcategory": "WCG",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wcg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
