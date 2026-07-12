/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-teaspoon-dry",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710483",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.4,
      "key": "1-teaspoon-dry",
      "kind": "unit",
      "label": "1 teaspoon, dry"
    },
    {
      "gramsPerUnit": 12.8,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Coffee, instant, pre-lightened and pre-sweetened with sugar, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 83.0,
    "energy_kcal": 438.0,
    "fat_g": 11.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.68,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 680.0,
    "protein_g": 2.4,
    "salt_g": 0.1175,
    "sat_fat_g": 6.45,
    "sodium_mg": 47.0,
    "sugar_g": 56.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710483",
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
