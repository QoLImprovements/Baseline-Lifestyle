/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "patty-small",
  "description": "Sweets",
  "id": "usda-sr-legacy-167978",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "patty-small",
      "kind": "unit",
      "label": "patty, small"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "patty-large",
      "kind": "unit",
      "label": "patty, large"
    }
  ],
  "name": "Candies, sweet chocolate coated fondant",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 80.4,
    "energy_kcal": 366.0,
    "fat_g": 9.3,
    "fibre_g": 2.1,
    "folate_ug": 3.0,
    "iron_mg": 1.56,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 168.0,
    "protein_g": 2.2,
    "salt_g": 0.065,
    "sat_fat_g": 5.46,
    "sodium_mg": 26.0,
    "sugar_g": 71.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167978",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
