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
  "id": "usda-sr-legacy-171839",
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
  "name": "Cake, snack cakes, not chocolate, with icing or filling, low-fat, with added fiber",
  "nutritionPerBasis": {
    "calcium_mg": 223.0,
    "carbs_g": 74.3,
    "energy_kcal": 412.0,
    "fat_g": 11.1,
    "fibre_g": 14.9,
    "folate_ug": 75.0,
    "iron_mg": 1.34,
    "magnesium_mg": 11.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 98.0,
    "potassium_mg": 73.0,
    "protein_g": 3.71,
    "salt_g": 0.79,
    "sat_fat_g": 3.71,
    "sodium_mg": 316.0,
    "sugar_g": 29.7,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171839",
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
