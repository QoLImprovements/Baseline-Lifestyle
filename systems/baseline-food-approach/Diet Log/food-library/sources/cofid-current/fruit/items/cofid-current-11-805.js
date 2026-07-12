/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "10 samples, 5 products",
  "id": "cofid-current-11-805",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fig Rolls",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 66.8,
    "energy_kcal": 363.0,
    "fat_g": 10.6,
    "fibre_g": 3.9,
    "folate_ug": 6.0,
    "iron_mg": 2.0,
    "magnesium_mg": 30.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 64.0,
    "potassium_mg": 299.0,
    "protein_g": 4.2,
    "salt_g": 0.6825,
    "sat_fat_g": 4.76,
    "sodium_mg": 273.0,
    "sugar_g": 43.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.59,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-805",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
