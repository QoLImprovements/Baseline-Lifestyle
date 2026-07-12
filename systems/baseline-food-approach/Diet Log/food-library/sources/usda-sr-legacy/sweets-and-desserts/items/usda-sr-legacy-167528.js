/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167528",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Pastry, Pastelitos de Guava (guava pastries)",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 47.8,
    "energy_kcal": 379.0,
    "fat_g": 18.5,
    "fibre_g": 2.2,
    "folate_ug": 0.0,
    "iron_mg": 2.12,
    "magnesium_mg": 15.0,
    "omega3_g": 0.164,
    "phosphorus_mg": 56.0,
    "potassium_mg": 103.0,
    "protein_g": 5.48,
    "salt_g": 0.5775,
    "sat_fat_g": 5.54,
    "sodium_mg": 231.0,
    "sugar_g": 17.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167528",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
