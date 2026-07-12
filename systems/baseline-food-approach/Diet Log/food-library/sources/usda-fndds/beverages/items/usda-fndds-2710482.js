/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710482",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.8,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 3.4,
      "key": "1-teaspoon-dry",
      "kind": "unit",
      "label": "1 teaspoon, dry"
    }
  ],
  "name": "Coffee, instant, pre-sweetened with sugar, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 94.9,
    "energy_kcal": 392.0,
    "fat_g": 0.36,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.89,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 686.0,
    "protein_g": 2.36,
    "salt_g": 0.02,
    "sat_fat_g": 0.038,
    "sodium_mg": 8.0,
    "sugar_g": 80.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710482",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "beverages",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
