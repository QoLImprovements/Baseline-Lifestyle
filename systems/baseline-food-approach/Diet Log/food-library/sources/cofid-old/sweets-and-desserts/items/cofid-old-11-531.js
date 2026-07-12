/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples including lemon, not iced",
  "id": "cofid-old-11-531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, madeira, retail",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 58.4,
    "energy_kcal": 377.0,
    "fat_g": 15.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.1,
    "magnesium_mg": 12.0,
    "omega3_g": 0.27,
    "phosphorus_mg": 120.0,
    "potassium_mg": 120.0,
    "protein_g": 5.4,
    "salt_g": 0.95,
    "sat_fat_g": 8.43,
    "sodium_mg": 380.0,
    "sugar_g": 36.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-531",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
