/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Outer leaves and stem removed. Shredded and boiled 19 minutes, based on boiled in salted water",
  "id": "cofid-current-13-540",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cabbage, red, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 2.3,
    "energy_kcal": 15.0,
    "fat_g": 0.3,
    "fibre_g": 2.3,
    "folate_ug": 31.0,
    "iron_mg": 0.3,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 130.0,
    "protein_g": 0.8,
    "salt_g": 0.015,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 32.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-540",
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
