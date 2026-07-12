/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, chilled and ambient",
  "id": "cofid-current-17-625",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, pasta, carbonara type",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 3.8,
    "energy_kcal": 151.0,
    "fat_g": 13.0,
    "fibre_g": 1.3,
    "folate_ug": 5.0,
    "iron_mg": 0.24,
    "magnesium_mg": 7.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 126.0,
    "potassium_mg": 80.0,
    "protein_g": 4.9,
    "salt_g": 0.85,
    "sat_fat_g": 7.67,
    "sodium_mg": 340.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-625",
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
