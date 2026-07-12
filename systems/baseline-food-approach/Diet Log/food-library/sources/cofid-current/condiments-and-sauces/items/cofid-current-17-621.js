/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, including chargrilled vegetable, sweet pepper, arrabbiata and mushroom pasta sauce, ambient",
  "id": "cofid-current-17-621",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, pasta, tomato based, with added vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 5.7,
    "energy_kcal": 46.0,
    "fat_g": 2.1,
    "fibre_g": 2.4,
    "folate_ug": 15.0,
    "iron_mg": 0.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 35.0,
    "potassium_mg": 354.0,
    "protein_g": 1.4,
    "salt_g": 0.575,
    "sat_fat_g": 0.29,
    "sodium_mg": 230.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-621",
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
