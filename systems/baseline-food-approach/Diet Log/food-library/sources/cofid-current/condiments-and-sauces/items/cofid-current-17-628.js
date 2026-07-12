/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, chilled and ambient",
  "id": "cofid-current-17-628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, Chinese cook in, sweet & sour",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 22.1,
    "energy_kcal": 94.0,
    "fat_g": 1.0,
    "fibre_g": 0.8,
    "folate_ug": 3.0,
    "iron_mg": 0.22,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 93.0,
    "protein_g": 0.5,
    "salt_g": 0.625,
    "sat_fat_g": 0.0,
    "sodium_mg": 250.0,
    "sugar_g": 19.4,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-628",
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
