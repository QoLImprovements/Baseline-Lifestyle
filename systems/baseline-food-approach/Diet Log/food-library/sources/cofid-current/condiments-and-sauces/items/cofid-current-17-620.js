/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "6 samples, 3 products, ambient",
  "id": "cofid-current-17-620",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, pasta, tomato based, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 6.7,
    "energy_kcal": 33.0,
    "fat_g": 0.3,
    "fibre_g": 2.0,
    "folate_ug": 2.0,
    "iron_mg": 0.65,
    "magnesium_mg": 19.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 33.0,
    "potassium_mg": 387.0,
    "protein_g": 1.4,
    "salt_g": 0.575,
    "sat_fat_g": 0.06,
    "sodium_mg": 230.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-620",
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
