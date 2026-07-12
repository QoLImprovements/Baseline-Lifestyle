/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-6-of-8-pie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175014",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "piece-1-6-of-8-pie",
      "kind": "unit",
      "label": "piece (1/6 of 8\" pie)"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "serving-167-pie",
      "kind": "unit",
      "label": "serving .167 pie"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "piece-1-4-of-6-pie",
      "kind": "unit",
      "label": "piece (1/4 of 6\" pie)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pie, chocolate creme, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 38.4,
    "energy_kcal": 1480.0,
    "fat_g": 22.4,
    "fibre_g": 0.8,
    "folate_ug": 19.0,
    "iron_mg": 1.49,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 79.0,
    "potassium_mg": 161.0,
    "protein_g": 4.15,
    "salt_g": 0.665,
    "sat_fat_g": 12.4,
    "sodium_mg": 266.0,
    "sugar_g": 27.4,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175014",
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
