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
  "id": "usda-sr-legacy-172778",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "piece-1-6-of-8-pie",
      "kind": "unit",
      "label": "piece (1/6 of 8\" pie)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pie, blueberry, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 34.9,
    "energy_kcal": 971.0,
    "fat_g": 10.0,
    "fibre_g": 1.0,
    "folate_ug": 27.0,
    "iron_mg": 0.3,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 50.0,
    "protein_g": 1.8,
    "salt_g": 0.7175,
    "sat_fat_g": 1.68,
    "sodium_mg": 287.0,
    "sugar_g": 9.89,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 10.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172778",
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
