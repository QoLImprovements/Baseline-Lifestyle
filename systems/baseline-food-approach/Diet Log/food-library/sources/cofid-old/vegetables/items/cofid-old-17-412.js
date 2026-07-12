/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from raw cabbage",
  "id": "cofid-old-17-412",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cabbage, dried",
  "nutritionPerBasis": {
    "calcium_mg": 470.0,
    "carbs_g": 38.0,
    "energy_kcal": 237.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 6.3,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 370.0,
    "potassium_mg": 2440.0,
    "protein_g": 15.4,
    "salt_g": 0.1125,
    "sat_fat_g": 0.9,
    "sodium_mg": 45.0,
    "sugar_g": 37.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.81,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-412",
  "state": "Dried",
  "subcategory": "DI",
  "tags": [
    "di",
    "dried",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
