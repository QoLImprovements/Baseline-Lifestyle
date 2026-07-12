/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 3 brands",
  "id": "cofid-old-11-191",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake mix",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 77.2,
    "energy_kcal": 331.0,
    "fat_g": 2.5,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.8,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 340.0,
    "potassium_mg": 89.0,
    "protein_g": 4.7,
    "salt_g": 1.275,
    "sat_fat_g": 0.0,
    "sodium_mg": 510.0,
    "sugar_g": 41.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-191",
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
