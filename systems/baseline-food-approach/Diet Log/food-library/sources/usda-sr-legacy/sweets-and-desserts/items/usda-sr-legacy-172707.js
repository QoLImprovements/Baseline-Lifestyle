/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "piece-1-12-of-10-inch-cake",
      "kind": "unit",
      "label": "piece (1/12 of 10 inch cake)"
    }
  ],
  "name": "Cake, sponge, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 57.7,
    "energy_kcal": 1240.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 1.58,
    "magnesium_mg": 9.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 100.0,
    "potassium_mg": 141.0,
    "protein_g": 7.3,
    "salt_g": 0.57,
    "sat_fat_g": 1.3,
    "sodium_mg": 228.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172707",
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
