/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-waffles",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167524",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "2-waffles",
      "kind": "unit",
      "label": "2 waffles"
    }
  ],
  "name": "Waffles, chocolate chip, frozen, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 357.0,
    "carbs_g": 45.7,
    "energy_kcal": 297.0,
    "fat_g": 10.1,
    "fibre_g": 1.5,
    "folate_ug": 75.0,
    "iron_mg": 6.4,
    "magnesium_mg": 16.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 272.0,
    "potassium_mg": 74.0,
    "protein_g": 5.8,
    "salt_g": 1.3225,
    "sat_fat_g": 3.57,
    "sodium_mg": 529.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 429.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167524",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
