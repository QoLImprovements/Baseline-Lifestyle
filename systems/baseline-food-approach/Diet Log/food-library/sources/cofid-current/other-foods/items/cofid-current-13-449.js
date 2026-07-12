/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Ends trimmed, scrubbed, sliced and boiled 15 minutes",
  "id": "cofid-current-13-449",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Carrots, young, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 4.4,
    "energy_kcal": 22.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.4,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 160.0,
    "protein_g": 0.6,
    "salt_g": 0.0575,
    "sat_fat_g": 0.1,
    "sodium_mg": 23.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 1284.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 9.2
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-449",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
