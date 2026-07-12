/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands, fresh",
  "id": "cofid-old-12-400",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mousse, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 19.9,
    "energy_kcal": 149.0,
    "fat_g": 6.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.6,
    "magnesium_mg": 28.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 100.0,
    "potassium_mg": 220.0,
    "protein_g": 4.0,
    "salt_g": 0.1675,
    "sat_fat_g": 3.34,
    "sodium_mg": 67.0,
    "sugar_g": 17.5,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-400",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
