/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, imported. Peeled, cut into chunks and boiled for 5-20 minutes",
  "id": "cofid-current-13-646",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweet potato, flesh only, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 13.0,
    "energy_kcal": 58.0,
    "fat_g": 0.2,
    "fibre_g": 2.7,
    "folate_ug": 6.0,
    "iron_mg": 0.53,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 375.0,
    "protein_g": 1.7,
    "salt_g": 0.0925,
    "sat_fat_g": 0.07,
    "sodium_mg": 37.0,
    "sugar_g": 9.4,
    "vitamin_a_ug": 927.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-646",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
