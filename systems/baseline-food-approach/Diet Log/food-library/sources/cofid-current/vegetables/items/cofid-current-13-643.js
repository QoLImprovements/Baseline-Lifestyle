/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from baked. Water analysed, 2017. 11 samples, imported, flesh only, loose and prepacked chunks. Cut into chunks and boiled for 15-20 minutes",
  "id": "cofid-current-13-643",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Squash, butternut, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 5.1,
    "energy_kcal": 24.0,
    "fat_g": 0.1,
    "fibre_g": 1.3,
    "folate_ug": 6.0,
    "iron_mg": 0.13,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 147.0,
    "protein_g": 0.9,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-643",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
