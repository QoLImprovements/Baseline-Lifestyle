/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands, boiled for 2-10 minutes",
  "id": "cofid-current-13-458",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spinach, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 0.5,
    "energy_kcal": 21.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 52.0,
    "iron_mg": 1.7,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 340.0,
    "protein_g": 3.1,
    "salt_g": 0.04,
    "sat_fat_g": 0.1,
    "sodium_mg": 16.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 1101.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 1.71,
    "vitamin_k_ug": 840.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-458",
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
