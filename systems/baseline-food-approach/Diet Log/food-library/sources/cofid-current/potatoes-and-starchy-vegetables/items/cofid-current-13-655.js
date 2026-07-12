/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "8 samples, fresh, imported. Peeled, cut into chunks and boiled for 20-30 minutes",
  "id": "cofid-current-13-655",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yam, flesh only, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 29.3,
    "energy_kcal": 118.0,
    "fat_g": 0.2,
    "fibre_g": 2.3,
    "folate_ug": 6.0,
    "iron_mg": 0.34,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 271.0,
    "protein_g": 1.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.07,
    "sodium_mg": 0.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-655",
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
