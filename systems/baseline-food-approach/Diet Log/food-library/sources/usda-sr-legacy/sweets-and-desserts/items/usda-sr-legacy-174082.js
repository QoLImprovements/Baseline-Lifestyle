/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cake-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174082",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "cake-1-serving",
      "kind": "unit",
      "label": "cake 1 serving"
    }
  ],
  "name": "Cake, snack cakes, creme-filled, chocolate with frosting, low-fat, with added fiber",
  "nutritionPerBasis": {
    "calcium_mg": 149.0,
    "carbs_g": 69.4,
    "energy_kcal": 1710.0,
    "fat_g": 13.0,
    "fibre_g": 14.9,
    "folate_ug": 69.0,
    "iron_mg": 4.01,
    "magnesium_mg": 34.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 146.0,
    "potassium_mg": 193.0,
    "protein_g": 3.71,
    "salt_g": 1.2075,
    "sat_fat_g": 5.57,
    "sodium_mg": 483.0,
    "sugar_g": 33.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174082",
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
