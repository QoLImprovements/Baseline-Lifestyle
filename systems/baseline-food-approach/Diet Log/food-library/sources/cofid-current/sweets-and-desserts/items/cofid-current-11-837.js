/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products",
  "id": "cofid-current-11-837",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shortcake, caramel, chocolate covered, retail",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 53.6,
    "energy_kcal": 466.0,
    "fat_g": 27.3,
    "fibre_g": 2.3,
    "folate_ug": 9.0,
    "iron_mg": 1.46,
    "magnesium_mg": 26.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 125.0,
    "potassium_mg": 254.0,
    "protein_g": 4.7,
    "salt_g": 0.645,
    "sat_fat_g": 15.18,
    "sodium_mg": 258.0,
    "sugar_g": 36.2,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-837",
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
