/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-299",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mustard leaves, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 1.9,
    "energy_kcal": 17.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.8,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 200.0,
    "protein_g": 2.0,
    "salt_g": 0.04,
    "sat_fat_g": 0.0,
    "sodium_mg": 16.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-299",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "condiments-and-sauces",
    "dg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
