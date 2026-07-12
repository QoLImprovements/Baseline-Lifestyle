/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-12-of-8-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172710",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "piece-1-12-of-8-dia",
      "kind": "unit",
      "label": "piece (1/12 of 8\" dia)"
    },
    {
      "gramsPerUnit": 817.0,
      "key": "cake-2-layer-8-dia",
      "kind": "unit",
      "label": "cake, 2-layer (8\" dia)"
    }
  ],
  "name": "Cake, yellow, prepared from recipe without frosting",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 53.0,
    "energy_kcal": 1510.0,
    "fat_g": 14.6,
    "fibre_g": 0.7,
    "folate_ug": 34.0,
    "iron_mg": 1.64,
    "magnesium_mg": 12.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 117.0,
    "potassium_mg": 91.0,
    "protein_g": 5.3,
    "salt_g": 0.8575,
    "sat_fat_g": 3.92,
    "sodium_mg": 343.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172710",
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
