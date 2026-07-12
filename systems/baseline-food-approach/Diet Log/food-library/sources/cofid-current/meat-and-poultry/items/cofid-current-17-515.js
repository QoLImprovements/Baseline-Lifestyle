/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands including Bovril, Oxo and own brands",
  "id": "cofid-current-17-515",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stock cubes, beef",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 9.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.2,
    "magnesium_mg": 32.0,
    "omega3_g": 0.25,
    "phosphorus_mg": 240.0,
    "potassium_mg": 490.0,
    "protein_g": 16.8,
    "salt_g": 36.4,
    "sat_fat_g": 3.51,
    "sodium_mg": 14560.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-515",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "meat-and-poultry",
    "unspecified",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
