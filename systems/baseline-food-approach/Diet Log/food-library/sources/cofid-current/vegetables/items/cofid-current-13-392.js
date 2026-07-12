/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Leaves; boiled 20 minutes",
  "id": "cofid-current-13-392",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turnip tops, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 0.2,
    "energy_kcal": 13.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 120.0,
    "iron_mg": 3.1,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 78.0,
    "protein_g": 2.7,
    "salt_g": 0.0175,
    "sat_fat_g": 0.0,
    "sodium_mg": 7.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 1000.0,
    "vitamin_c_mg": 40.0,
    "vitamin_e_mg": 2.87,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-392",
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
