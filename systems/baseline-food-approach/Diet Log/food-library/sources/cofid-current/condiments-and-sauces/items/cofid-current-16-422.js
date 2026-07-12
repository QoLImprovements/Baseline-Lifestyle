/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "9 samples, 8 products",
  "id": "cofid-current-16-422",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sardines, canned in tomato sauce, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 455.0,
    "carbs_g": 0.9,
    "energy_kcal": 175.0,
    "fat_g": 10.8,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 2.69,
    "magnesium_mg": 38.0,
    "omega3_g": 2.98,
    "phosphorus_mg": 417.0,
    "potassium_mg": 371.0,
    "protein_g": 18.5,
    "salt_g": 0.7875,
    "sat_fat_g": 2.89,
    "sodium_mg": 315.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-422",
  "state": "Canned",
  "subcategory": "JC",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
