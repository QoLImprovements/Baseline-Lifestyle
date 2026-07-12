/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-8-of-9-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175015",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
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
  "name": "Pie, chocolate mousse, prepared from mix, no-bake type",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 29.6,
    "energy_kcal": 1090.0,
    "fat_g": 15.4,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 1.08,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 231.0,
    "potassium_mg": 285.0,
    "protein_g": 3.5,
    "salt_g": 1.15,
    "sat_fat_g": 8.2,
    "sodium_mg": 460.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 124.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175015",
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
