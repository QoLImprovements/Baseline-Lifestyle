/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Ends trimmed, sliced and shallow fried 5 minutes",
  "id": "cofid-current-13-232",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Courgette, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 2.6,
    "energy_kcal": 63.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 1.4,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 490.0,
    "protein_g": 2.6,
    "salt_g": 0.0025,
    "sat_fat_g": 0.6,
    "sodium_mg": 1.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 3.69
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-232",
  "state": "Fried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
