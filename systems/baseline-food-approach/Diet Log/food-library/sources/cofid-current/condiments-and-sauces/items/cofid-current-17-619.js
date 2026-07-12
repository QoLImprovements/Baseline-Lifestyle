/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "11 samples, 10 products, including tomato and basil sauce, ambient",
  "id": "cofid-current-17-619",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, pasta, tomato based, napoletana",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 6.5,
    "energy_kcal": 65.0,
    "fat_g": 3.8,
    "fibre_g": 2.3,
    "folate_ug": 8.0,
    "iron_mg": 0.62,
    "magnesium_mg": 18.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 32.0,
    "potassium_mg": 356.0,
    "protein_g": 1.5,
    "salt_g": 0.725,
    "sat_fat_g": 0.54,
    "sodium_mg": 290.0,
    "sugar_g": 6.3,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-619",
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
