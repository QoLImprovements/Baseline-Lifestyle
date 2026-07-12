/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "As raw, boiled for 5-10 minutes",
  "id": "cofid-current-13-497",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Carrots, old, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 6.0,
    "energy_kcal": 29.0,
    "fat_g": 0.5,
    "fibre_g": 2.8,
    "folate_ug": 8.0,
    "iron_mg": 0.34,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 166.0,
    "protein_g": 0.5,
    "salt_g": 0.0725,
    "sat_fat_g": 0.15,
    "sodium_mg": 29.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 1850.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 5.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-497",
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
