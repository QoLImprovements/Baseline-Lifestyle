/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-12-of-9-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172712",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "piece-1-12-of-9-dia",
      "kind": "unit",
      "label": "piece (1/12 of 9\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, cheesecake, prepared from mix, no-bake type",
  "nutritionPerBasis": {
    "calcium_mg": 172.0,
    "carbs_g": 35.5,
    "energy_kcal": 1150.0,
    "fat_g": 12.7,
    "fibre_g": 1.9,
    "folate_ug": 30.0,
    "iron_mg": 0.47,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 234.0,
    "potassium_mg": 211.0,
    "protein_g": 5.5,
    "salt_g": 0.95,
    "sat_fat_g": 6.69,
    "sodium_mg": 380.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172712",
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
