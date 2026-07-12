/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "9 samples",
  "id": "cofid-current-14-837",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pecan nuts, kernel only",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 5.8,
    "energy_kcal": 689.0,
    "fat_g": 70.1,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 2.2,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 520.0,
    "protein_g": 9.2,
    "salt_g": 0.0025,
    "sat_fat_g": 5.7,
    "sodium_mg": 1.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-837",
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
