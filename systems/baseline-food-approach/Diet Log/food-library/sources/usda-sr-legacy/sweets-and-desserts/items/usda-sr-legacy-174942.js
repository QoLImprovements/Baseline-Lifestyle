/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cupcake",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "cupcake",
      "kind": "unit",
      "label": "cupcake"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, snack cakes, creme-filled, chocolate with frosting",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 60.3,
    "energy_kcal": 399.0,
    "fat_g": 15.9,
    "fibre_g": 3.2,
    "folate_ug": 26.0,
    "iron_mg": 3.6,
    "magnesium_mg": 36.0,
    "omega3_g": 0.173,
    "phosphorus_mg": 87.0,
    "potassium_mg": 176.0,
    "protein_g": 3.63,
    "salt_g": 0.83,
    "sat_fat_g": 4.88,
    "sodium_mg": 332.0,
    "sugar_g": 37.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174942",
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
