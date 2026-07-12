/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products , frozen and chilled",
  "id": "cofid-current-11-937",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, garlic and herb, retail",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 45.1,
    "energy_kcal": 348.0,
    "fat_g": 16.7,
    "fibre_g": 2.7,
    "folate_ug": 11.0,
    "iron_mg": 1.57,
    "magnesium_mg": 21.0,
    "omega3_g": 0.32,
    "phosphorus_mg": 88.0,
    "potassium_mg": 149.0,
    "protein_g": 7.0,
    "salt_g": 1.19,
    "sat_fat_g": 8.63,
    "sodium_mg": 476.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 188.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.79,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-937",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
