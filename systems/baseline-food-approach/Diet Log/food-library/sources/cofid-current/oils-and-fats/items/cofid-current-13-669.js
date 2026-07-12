/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "11 samples, UK and imported, roasted in a small amount of rapeseed oil for 20-30 minutes",
  "id": "cofid-current-13-669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Aubergine, flesh and skin, roasted in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 5.2,
    "energy_kcal": 62.0,
    "fat_g": 3.8,
    "fibre_g": 5.1,
    "folate_ug": 20.0,
    "iron_mg": 0.49,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 389.0,
    "protein_g": 2.1,
    "salt_g": 0.005,
    "sat_fat_g": 0.35,
    "sodium_mg": 2.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-669",
  "state": "Roasted",
  "subcategory": "DG",
  "tags": [
    "dg",
    "oils-and-fats",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
