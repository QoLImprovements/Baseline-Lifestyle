/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cake-2-layer-8-or-9-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1137.0,
      "key": "cake-2-layer-8-or-9-dia",
      "kind": "unit",
      "label": "cake, 2-layer (8\" or 9\" dia)"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "piece-1-12-of-9-dia",
      "kind": "unit",
      "label": "piece (1/12 of 9\" dia)"
    }
  ],
  "name": "Cake, chocolate, prepared from recipe without frosting",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 53.4,
    "energy_kcal": 1550.0,
    "fat_g": 15.1,
    "fibre_g": 1.6,
    "folate_ug": 27.0,
    "iron_mg": 1.61,
    "magnesium_mg": 32.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 106.0,
    "potassium_mg": 140.0,
    "protein_g": 5.3,
    "salt_g": 0.7875,
    "sat_fat_g": 5.43,
    "sodium_mg": 315.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 140.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172697",
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
