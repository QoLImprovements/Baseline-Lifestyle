/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "8 samples, 5 brands; including liver and bacon, sausage, beef Bourguignon mixes",
  "id": "cofid-current-17-329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, dry, casserole mix",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 68.2,
    "energy_kcal": 330.0,
    "fat_g": 3.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.9,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 800.0,
    "protein_g": 9.7,
    "salt_g": 13.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 5400.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-329",
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
