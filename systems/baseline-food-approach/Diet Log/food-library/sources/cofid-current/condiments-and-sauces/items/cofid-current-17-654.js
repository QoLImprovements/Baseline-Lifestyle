/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "11 samples,7 products",
  "id": "cofid-current-17-654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mayonnaise, standard, retail",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 2.4,
    "energy_kcal": 686.0,
    "fat_g": 74.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.16,
    "magnesium_mg": 0.0,
    "omega3_g": 5.83,
    "phosphorus_mg": 5.0,
    "potassium_mg": 4.0,
    "protein_g": 1.1,
    "salt_g": 0.3275,
    "sat_fat_g": 5.65,
    "sodium_mg": 131.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 22.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-654",
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
