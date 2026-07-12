/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174998",
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
      "gramsPerUnit": 65.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "French toast, prepared from recipe, made with low fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 25.0,
    "energy_kcal": 958.0,
    "fat_g": 10.8,
    "fibre_g": 0.0,
    "folate_ug": 43.0,
    "iron_mg": 1.67,
    "magnesium_mg": 17.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 117.0,
    "potassium_mg": 134.0,
    "protein_g": 7.7,
    "salt_g": 1.1975,
    "sat_fat_g": 2.72,
    "sodium_mg": 479.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 124.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174998",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
