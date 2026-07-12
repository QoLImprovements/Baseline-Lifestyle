/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "110 samples, 10 products, including white wine sauces, cheese sauces and creamy sauces, chilled and ambient",
  "id": "cofid-current-17-631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, traditional cook in, white sauce based",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 5.7,
    "energy_kcal": 105.0,
    "fat_g": 8.6,
    "fibre_g": 2.3,
    "folate_ug": 7.0,
    "iron_mg": 0.14,
    "magnesium_mg": 5.0,
    "omega3_g": 0.25,
    "phosphorus_mg": 56.0,
    "potassium_mg": 67.0,
    "protein_g": 1.6,
    "salt_g": 0.925,
    "sat_fat_g": 1.69,
    "sodium_mg": 370.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-631",
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
