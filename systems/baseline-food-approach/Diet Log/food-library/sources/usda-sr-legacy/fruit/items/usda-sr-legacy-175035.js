/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175035",
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
      "gramsPerUnit": 54.0,
      "key": "pastry",
      "kind": "unit",
      "label": "pastry"
    }
  ],
  "name": "Toaster pastries, fruit (includes apple, blueberry, cherry, strawberry)",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 70.3,
    "energy_kcal": 1620.0,
    "fat_g": 9.95,
    "fibre_g": 1.0,
    "folate_ug": 111.0,
    "iron_mg": 5.51,
    "magnesium_mg": 12.0,
    "omega3_g": 0.314,
    "phosphorus_mg": 87.0,
    "potassium_mg": 102.0,
    "protein_g": 4.2,
    "salt_g": 0.835,
    "sat_fat_g": 3.62,
    "sodium_mg": 334.0,
    "sugar_g": 26.1,
    "vitamin_a_ug": 202.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 15.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175035",
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
