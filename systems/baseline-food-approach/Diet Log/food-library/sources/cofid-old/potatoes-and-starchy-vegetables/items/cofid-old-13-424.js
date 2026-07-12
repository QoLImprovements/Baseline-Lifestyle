/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "2 samples of different brands",
  "id": "cofid-old-13-424",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato fritters, battered, baked",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 25.5,
    "energy_kcal": 185.0,
    "fat_g": 8.5,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.49,
    "magnesium_mg": 16.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 87.0,
    "potassium_mg": 300.0,
    "protein_g": 3.2,
    "salt_g": 1.0125,
    "sat_fat_g": 3.82,
    "sodium_mg": 405.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-424",
  "state": "Baked",
  "subcategory": "DAR",
  "tags": [
    "baked",
    "dar",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
