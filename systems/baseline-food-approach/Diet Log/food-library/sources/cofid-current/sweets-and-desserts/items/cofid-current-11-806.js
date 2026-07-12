/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, including milk and plain chocolate, shortcake, rich tea, gems and animal shapes",
  "id": "cofid-current-11-806",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, short or sweet, half coated in chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 70.3,
    "energy_kcal": 506.0,
    "fat_g": 24.2,
    "fibre_g": 1.4,
    "folate_ug": 8.0,
    "iron_mg": 2.4,
    "magnesium_mg": 35.0,
    "omega3_g": 0.27,
    "phosphorus_mg": 123.0,
    "potassium_mg": 260.0,
    "protein_g": 6.0,
    "salt_g": 0.6225,
    "sat_fat_g": 12.5,
    "sodium_mg": 249.0,
    "sugar_g": 35.5,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-806",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
