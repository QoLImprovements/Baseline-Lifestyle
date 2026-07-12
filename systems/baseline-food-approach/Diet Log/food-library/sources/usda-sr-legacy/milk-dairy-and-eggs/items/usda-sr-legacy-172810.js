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
  "id": "usda-sr-legacy-172810",
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
      "gramsPerUnit": 35.0,
      "key": "roll-2-1-2-dia",
      "kind": "unit",
      "label": "roll (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "large-roll-or-bun-3-1-2-dia",
      "kind": "unit",
      "label": "large roll or bun (3-1/2\" dia)"
    }
  ],
  "name": "Rolls, dinner, plain, prepared from recipe, made with low fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 53.4,
    "energy_kcal": 1320.0,
    "fat_g": 7.3,
    "fibre_g": 1.9,
    "folate_ug": 90.0,
    "iron_mg": 2.96,
    "magnesium_mg": 19.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 126.0,
    "potassium_mg": 152.0,
    "protein_g": 8.5,
    "salt_g": 1.0375,
    "sat_fat_g": 1.8,
    "sodium_mg": 415.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172810",
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
