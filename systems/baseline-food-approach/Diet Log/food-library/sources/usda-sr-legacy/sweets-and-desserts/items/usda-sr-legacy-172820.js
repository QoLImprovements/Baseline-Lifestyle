/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cookie-medium-2-1-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "cookie-medium-2-1-4-dia",
      "kind": "unit",
      "label": "cookie, medium (2-1/4\" dia)"
    },
    {
      "gramsPerUnit": 2.2,
      "key": "cookie-bite-size-include-mini-chips-ahoy",
      "kind": "unit",
      "label": "cookie, bite size (include Mini Chips Ahoy!)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, chocolate chip, commercially prepared, regular, higher fat, unenriched",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 66.8,
    "energy_kcal": 2010.0,
    "fat_g": 22.6,
    "fibre_g": 2.5,
    "folate_ug": 9.0,
    "iron_mg": 1.0,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 135.0,
    "protein_g": 5.4,
    "salt_g": 0.7875,
    "sat_fat_g": 7.48,
    "sodium_mg": 315.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172820",
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
