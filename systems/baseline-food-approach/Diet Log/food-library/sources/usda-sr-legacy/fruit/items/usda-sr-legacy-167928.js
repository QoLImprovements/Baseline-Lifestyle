/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "pastry",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167928",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "pastry",
      "kind": "unit",
      "label": "pastry"
    }
  ],
  "name": "Toaster pastries, fruit, toasted (include apple, blueberry, cherry, strawberry)",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 72.7,
    "energy_kcal": 409.0,
    "fat_g": 11.0,
    "fibre_g": 1.0,
    "folate_ug": 48.0,
    "iron_mg": 3.92,
    "magnesium_mg": 12.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 76.0,
    "potassium_mg": 81.0,
    "protein_g": 4.7,
    "salt_g": 0.885,
    "sat_fat_g": 2.64,
    "sodium_mg": 354.0,
    "sugar_g": 29.0,
    "vitamin_a_ug": 467.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167928",
  "state": "Raw",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
