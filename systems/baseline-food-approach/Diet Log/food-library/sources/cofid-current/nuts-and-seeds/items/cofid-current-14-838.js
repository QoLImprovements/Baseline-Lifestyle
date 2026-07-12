/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "Calculated from 14-837",
  "id": "cofid-current-14-838",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pecan nuts, kernel only, weighed with shells",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 2.8,
    "energy_kcal": 337.0,
    "fat_g": 34.3,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.1,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 250.0,
    "protein_g": 4.5,
    "salt_g": 0.0,
    "sat_fat_g": 2.8,
    "sodium_mg": 0.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-838",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
