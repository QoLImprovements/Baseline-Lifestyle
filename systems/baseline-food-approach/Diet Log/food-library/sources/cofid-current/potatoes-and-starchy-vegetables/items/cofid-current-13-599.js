/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from raw, parboiled for 5-10 minutes and roasted for 50 minutes. Water and fat analysed, 2013",
  "id": "cofid-current-13-599",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, old, roasted in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 26.4,
    "energy_kcal": 161.0,
    "fat_g": 5.7,
    "fibre_g": 2.7,
    "folate_ug": 8.0,
    "iron_mg": 0.43,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 597.0,
    "protein_g": 2.6,
    "salt_g": 0.0075,
    "sat_fat_g": 0.84,
    "sodium_mg": 3.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-599",
  "state": "Roasted",
  "subcategory": "DAM",
  "tags": [
    "dam",
    "potatoes-and-starchy-vegetables",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
