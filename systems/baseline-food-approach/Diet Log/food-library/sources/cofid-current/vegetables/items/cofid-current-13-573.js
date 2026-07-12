/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Ribs and stems removed, shredded",
  "id": "cofid-current-13-573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spinach, mature, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 0.8,
    "energy_kcal": 19.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 81.0,
    "iron_mg": 1.6,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 230.0,
    "protein_g": 2.2,
    "salt_g": 0.3,
    "sat_fat_g": 0.1,
    "sodium_mg": 120.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 640.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.71,
    "vitamin_k_ug": 575.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-573",
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
