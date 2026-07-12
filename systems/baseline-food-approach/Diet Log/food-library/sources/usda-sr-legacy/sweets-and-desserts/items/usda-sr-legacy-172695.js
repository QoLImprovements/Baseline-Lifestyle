/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-12-of-10-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172695",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "piece-1-12-of-10-dia",
      "kind": "unit",
      "label": "piece (1/12 of 10\" dia)"
    },
    {
      "gramsPerUnit": 596.0,
      "key": "tube-cake-10-dia-4-3-8-high",
      "kind": "unit",
      "label": "tube cake (10\" dia, 4-3/8\" high)"
    }
  ],
  "name": "Cake, angelfood, dry mix, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 58.7,
    "energy_kcal": 1080.0,
    "fat_g": 0.3,
    "fibre_g": 0.2,
    "folate_ug": 19.0,
    "iron_mg": 0.23,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 232.0,
    "potassium_mg": 135.0,
    "protein_g": 6.1,
    "salt_g": 1.2775,
    "sat_fat_g": 0.043,
    "sodium_mg": 511.0,
    "sugar_g": 30.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172695",
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
