/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "10 samples, 3 brands",
  "id": "cofid-current-14-892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peanut butter, smooth",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 13.1,
    "energy_kcal": 607.0,
    "fat_g": 51.8,
    "fibre_g": 6.6,
    "folate_ug": 53.0,
    "iron_mg": 2.1,
    "magnesium_mg": 180.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 330.0,
    "potassium_mg": 700.0,
    "protein_g": 22.8,
    "salt_g": 0.875,
    "sat_fat_g": 12.78,
    "sodium_mg": 350.0,
    "sugar_g": 6.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.99,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-892",
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
