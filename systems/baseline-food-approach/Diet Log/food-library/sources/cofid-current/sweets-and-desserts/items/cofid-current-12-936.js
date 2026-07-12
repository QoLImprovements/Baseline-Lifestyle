/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 7 brands",
  "id": "cofid-current-12-936",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quiche, Lorraine, shortcrust pastry, retail",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 19.7,
    "energy_kcal": 269.0,
    "fat_g": 17.6,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 0.61,
    "magnesium_mg": 15.0,
    "omega3_g": 0.3,
    "phosphorus_mg": 177.0,
    "potassium_mg": 155.0,
    "protein_g": 9.1,
    "salt_g": 0.8475,
    "sat_fat_g": 8.31,
    "sodium_mg": 339.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 109.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-936",
  "state": "Unspecified",
  "subcategory": "CD",
  "tags": [
    "cd",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
