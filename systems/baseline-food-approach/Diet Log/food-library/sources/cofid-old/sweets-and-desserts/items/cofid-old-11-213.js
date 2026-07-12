/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 cakes, 3 brands; sandwich and Swiss roll",
  "id": "cofid-old-11-213",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, sponge, jam filled, retail",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 64.2,
    "energy_kcal": 302.0,
    "fat_g": 4.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.6,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 140.0,
    "protein_g": 4.2,
    "salt_g": 1.05,
    "sat_fat_g": 1.6,
    "sodium_mg": 420.0,
    "sugar_g": 47.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-213",
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
