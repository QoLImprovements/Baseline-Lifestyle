/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-14-840",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pistachio nuts, kernel only, roasted and salted",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 8.2,
    "energy_kcal": 601.0,
    "fat_g": 55.4,
    "fibre_g": 7.4,
    "folate_ug": 58.0,
    "iron_mg": 3.0,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 420.0,
    "potassium_mg": 1040.0,
    "protein_g": 17.9,
    "salt_g": 1.325,
    "sat_fat_g": 7.4,
    "sodium_mg": 530.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-840",
  "state": "Roasted",
  "subcategory": "GA",
  "tags": [
    "ga",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
