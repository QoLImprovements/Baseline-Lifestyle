/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 9 brands",
  "id": "cofid-old-19-135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Luncheon meat, canned",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 3.6,
    "energy_kcal": 279.0,
    "fat_g": 23.8,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.38,
    "phosphorus_mg": 200.0,
    "potassium_mg": 120.0,
    "protein_g": 12.9,
    "salt_g": 2.3,
    "sat_fat_g": 8.7,
    "sodium_mg": 920.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-135",
  "state": "Canned",
  "subcategory": "MI",
  "tags": [
    "canned",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
