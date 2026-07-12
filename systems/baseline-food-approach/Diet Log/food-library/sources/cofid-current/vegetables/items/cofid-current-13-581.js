/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Average of green and white cabbage",
  "id": "cofid-current-13-581",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cabbage, average, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 2.8,
    "energy_kcal": 17.0,
    "fat_g": 0.2,
    "fibre_g": 2.2,
    "folate_ug": 38.0,
    "iron_mg": 0.34,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 172.0,
    "protein_g": 1.1,
    "salt_g": 0.0125,
    "sat_fat_g": 0.02,
    "sodium_mg": 5.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 32.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 121.1
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-581",
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
