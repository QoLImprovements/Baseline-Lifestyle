/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "IFR. Samples as raw; baked 90 minutes 200C and calculated from 13-491. Average of Desiree, King Edward, Pentland Crown, Maris Piper over 6 seasons",
  "id": "cofid-current-13-620",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, old, baked, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 18.0,
    "energy_kcal": 77.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.4,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 360.0,
    "protein_g": 2.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.94
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-620",
  "state": "Baked",
  "subcategory": "DAM",
  "tags": [
    "baked",
    "dam",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
