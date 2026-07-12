/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "15 samples, 15 products, cold-water/Atlantic prawns (Pandalus borealis), chilled/frozen",
  "id": "cofid-current-16-384",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prawns, standard, purchased cooked",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 0.0,
    "energy_kcal": 70.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.0,
    "magnesium_mg": 36.0,
    "omega3_g": 0.2,
    "phosphorus_mg": 127.0,
    "potassium_mg": 74.0,
    "protein_g": 15.4,
    "salt_g": 1.47,
    "sat_fat_g": 0.15,
    "sodium_mg": 588.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.63,
    "vitamin_k_ug": 0.08
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-384",
  "state": "Raw",
  "subcategory": "JK",
  "tags": [
    "jk",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
